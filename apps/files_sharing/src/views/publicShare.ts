/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import { translate as t } from '@nextcloud/l10n'
import { View, getNavigation } from '@nextcloud/files'
import LinkSvg from '@mdi/svg/svg/link.svg?raw'

import { getContents } from '../../../files/src/services/Files'

export default () => {
	const Navigation = getNavigation()
	const view = new View({
		id: 'public-share',
		name: t('files_sharing', 'Public share'),
		caption: t('files_sharing', 'Public shared files.'),

		emptyTitle: t('files_sharing', 'No files'),
		emptyCaption: t('files_sharing', 'Files and folders shared with you will show up here'),

		icon: LinkSvg,
		order: 1,

		getContents,
	})

	Navigation.register(view)
	Navigation.setActive(view)
}
