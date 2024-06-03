/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import type { ContentsWithRoot } from '@nextcloud/files'
import type { FileStat, ResponseDataDetailed } from 'webdav'

import { File, Folder, davGetDefaultPropfind, davGetClient, davRemoteURL, davResultToNode, davRootPath } from '@nextcloud/files'
import { loadState } from '@nextcloud/initial-state'
import { generateRemoteUrl } from '@nextcloud/router'
import { CancelablePromise } from 'cancelable-promise'
import { join } from 'path'
import logger from '../logger'

const sharingToken = loadState('files_sharing', 'sharingToken', null)
const rootPath = sharingToken ? `/files/${sharingToken}` : davRootPath
const remoteURL = sharingToken ? generateRemoteUrl('dav').replace('remote.php', 'public.php') : davRemoteURL
const client = davGetClient(remoteURL)

export const resultToNode = (stat: FileStat) => davResultToNode(stat, rootPath, remoteURL)

export const getContents = (path = '/'): Promise<ContentsWithRoot> => {
	path = join(rootPath, path)
	const controller = new AbortController()
	const propfindPayload = davGetDefaultPropfind()

	return new CancelablePromise(async (resolve, reject, onCancel) => {
		onCancel(() => controller.abort())
		try {
			const contentsResponse = await client.getDirectoryContents(path, {
				details: true,
				data: propfindPayload,
				includeSelf: true,
				signal: controller.signal,
			}) as ResponseDataDetailed<FileStat[]>

			const root = contentsResponse.data[0]
			const contents = contentsResponse.data.slice(1)
			if (root.filename !== path && `${root.filename}/` !== path) {
				logger.debug(`Exepected "${path}" but got filename "${root.filename}" instead.`)
				throw new Error('Root node does not match requested path')
			}

			resolve({
				folder: resultToNode(root) as Folder,
				contents: contents.map(result => {
					try {
						return resultToNode(result)
					} catch (error) {
						logger.error(`Invalid node detected '${result.basename}'`, { error })
						return null
					}
				}).filter(Boolean) as File[],
			})
		} catch (error) {
			reject(error)
		}
	})
}
