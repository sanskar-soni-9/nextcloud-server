 <!--
  - @copyright Copyright (c) 2020 Fon E. Noel NFEBE <fenn25.fn@gmail.com>
  -
  - @author Fon E. Noel NFEBE <fenn25.fn@gmail.com>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program.  If not, see <http://www.gnu.org/licenses/>.
  -
  -->
<template>
	<div>
		<div class="header-menu">
			<NcButton v-if="!showLocalSearch"
				class="global-search__button"
				aria-label="Global search"
				@click="openLocalSearch">
				<template #icon>
					<Magnify class="global-search__trigger" :size="22" />
				</template>
			</NcButton>
			<template v-else>
				<NcTextField ref="search"
					:value.sync="searchString"
					trailing-button-icon="close"
					:placeholder="'Search Files'"
					:show-trailing-button="true"
					@input="onInput"
					@trailing-button-click="abortSearch">
					<template #right-button>
						<NcButton type="tertiary" class="right-button" @click="openGlobalSearch">
							<template #icon>
								<Earth :size="20" />
							</template>
							{{ t("core", "Search everywhere") }}
						</NcButton>
					</template>
					<Magnify color="var(--color-main-background)" :size="20" />
				</NcTextField>
			</template>
		</div>
		<GlobalSearchModal v-if="showGlobalSearch"
			:is-visible="showGlobalSearch"
			:initial-search-string="searchString"
			:class="'global-search-modal'"
			@close="abortSearch" />
	</div>
</template>

<script>
import Magnify from 'vue-material-design-icons/Magnify.vue'
import GlobalSearchModal from './GlobalSearchModal.vue'
import { NcTextField, NcButton } from '@nextcloud/vue'

import Earth from 'vue-material-design-icons/Earth.vue'

import { emit } from '@nextcloud/event-bus'

export default {
	name: 'GlobalSearch',
	components: {
		NcButton,
		Magnify,
		GlobalSearchModal,
		NcTextField,
		Earth,
	},

	data() {
		return {
			showGlobalSearch: false,
			showLocalSearch: false,
			searchString: '',
		}
	},

	watch: {
		searchString() {
			emit('nextcloud:unified-search.search', { query: this.searchString })
		},
	},

	mounted() {
		if (OCP.Accessibility.disableKeyboardShortcuts()) {
			return
		}

		document.addEventListener('keydown', (event) => {
			// if not already opened, allows us to trigger default browser on second keydown
			if (event.ctrlKey && event.code === 'KeyF' && !this.showLocalSearch) {
				event.preventDefault()
				this.openLocalSearch()
			}
		})
	},

	methods: {
		openLocalSearch() {
			this.showLocalSearch = true
			this.focusInput()
		},

		openGlobalSearch() {
			this.showLocalSearch = false
			this.showGlobalSearch = true
			this.$nextTick(() => {
				this.searchString = ''
			})
		},

		focusInput() {
			this.$nextTick(() => {
				this.$refs.search.$el.children[0].children[0].focus()
			})
		},

		abortSearch() {
			this.showLocalSearch = false
			this.showGlobalSearch = false
			this.searchString = ''
		},

		onInput() {
			// emit the search query

		},
	},
}
</script>

<style lang="scss" scoped>
.header-menu {
	margin: 3px 0;

	.global-search__button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--header-height);
		// height: var(--header-height);
		margin: 0;
		padding: 0;
		cursor: pointer;
		opacity: .85;
		background-color: transparent;
		border: none;
		filter: none !important;
		color: var(--color-primary-text) !important;

		&:hover {
			background-color: transparent !important;
		}
	}
}

.global-search-modal {
	::v-deep .modal-container {
		height: 80%;
	}
}

.right-button {
  position: absolute !important;
  top: 0;
  right: var(--default-clickable-area);
}

.header-menu {
	& :deep(.input-field) {
		margin: 3px 0 !important;
		.input-field__input, .input-field__input--trailing-icon{
			width: min(500px, calc(100vw - 8px)) !important;
			border: none !important;
			border-radius: var(--border-radius-pill) !important;
			&:hover:not([disabled]),
			&:focus:not([disabled]),
			&:active:not([disabled]) {
				box-shadow: unset !important;
				border: unset !important;
				outline: unset !important;
			}
		}
	}
}

</style>
