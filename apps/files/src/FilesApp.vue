<!--
 - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
 -->
<template>
	<NcContent app-name="files">
		<Navigation v-if="!isPublic" />
		<FilesList :is-public="isPublic" />
	</NcContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NcContent from '@nextcloud/vue/dist/Components/NcContent.js'

import Navigation from './views/Navigation.vue'
import FilesList from './views/FilesList.vue'
import { loadState } from '@nextcloud/initial-state'

export default defineComponent({
	name: 'FilesApp',

	components: {
		NcContent,
		FilesList,
		Navigation,
	},

	setup() {
		const isPublic = loadState('files_sharing', 'isPublic', false)
		return {
			isPublic,
		}
	},
})
</script>
