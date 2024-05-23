/**
 * @copyright Copyright (c) 2022 John Molakvoæ <skjnldsv@protonmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import { User } from '@nextcloud/cypress'

import { defaultPrimary, defaultBackground, pickRandomColor, validateBodyThemingCss } from './themingUtils'

const admin = new User('admin', 'admin')

describe('User default background settings', function() {
	before(function() {
		cy.resetAdminTheming()
		cy.resetUserTheming(admin)
		cy.createRandomUser().then((user: User) => {
			cy.login(user)
		})
	})

	it('See the user background settings', function() {
		cy.visit('/settings/user/theming')
		cy.get('[data-user-theming-background-settings]').scrollIntoView()
		cy.get('[data-user-theming-background-settings]').should('be.visible')
	})

	// Default cloud background is not rendered if admin theming background remains unchanged
	it('Default cloud background is not rendered', function() {
		cy.get(`[data-user-theming-background-shipped="${defaultBackground}"]`).should('not.exist')
	})

	it('Default is selected on new users', function() {
		cy.get('[data-user-theming-background-default]').should('be.visible')
		cy.get('[data-user-theming-background-default]').should('have.class', 'background--active')
	})

	it('Default background has accessibility attribute set', function() {
		cy.get('[data-user-theming-background-default]').should('have.attr', 'aria-pressed', 'true')
	})
})

describe('User select shipped backgrounds and remove background', function() {
	before(function() {
		cy.createRandomUser().then((user: User) => {
			cy.login(user)
		})
	})

	it('See the user background settings', function() {
		cy.visit('/settings/user/theming')
		cy.get('[data-user-theming-background-settings]').scrollIntoView()
		cy.get('[data-user-theming-background-settings]').should('be.visible')
	})

	it('Select a shipped background', function() {
		const background = 'anatoly-mikhaltsov-butterfly-wing-scale.jpg'
		cy.intercept('*/apps/theming/background/shipped').as('setBackground')

		// Select background
		cy.get(`[data-user-theming-background-shipped="${background}"]`).click()

		// Set the accessibility state
		cy.get(`[data-user-theming-background-shipped="${background}"]`).should('have.attr', 'aria-pressed', 'true')

		// Validate changed background and primary
		cy.wait('@setBackground')
		cy.waitUntil(() => validateBodyThemingCss('#a53c17', background, '#652e11'))
	})

	it('Select a bright shipped background', function() {
		const background = 'bernie-cetonia-aurata-take-off-composition.jpg'
		cy.intercept('*/apps/theming/background/shipped').as('setBackground')

		// Select background
		cy.get(`[data-user-theming-background-shipped="${background}"]`).click()

		// Set the accessibility state
		cy.get(`[data-user-theming-background-shipped="${background}"]`).should('have.attr', 'aria-pressed', 'true')

		// Validate changed background and primary
		cy.wait('@setBackground')
		cy.waitUntil(() => validateBodyThemingCss('#56633d', background, '#dee0d3'))
	})

	it('Remove background', function() {
		cy.intercept('*/apps/theming/background/color').as('clearBackground')

		// Clear background
		cy.get('[data-user-theming-background-color]').click()

		// Set the accessibility state
		cy.get('[data-user-theming-background-color]').should('have.attr', 'aria-pressed', 'true')

		// Validate clear background
		cy.wait('@clearBackground')
		cy.waitUntil(() => validateBodyThemingCss('#56633d', null, '#dee0d3'))
	})
})

describe('User select a custom color', function() {
	before(function() {
		cy.createRandomUser().then((user: User) => {
			cy.login(user)
		})
	})

	it('See the user background settings', function() {
		cy.visit('/settings/user/theming')
		cy.get('[data-user-theming-background-settings]').scrollIntoView()
		cy.get('[data-user-theming-background-settings]').should('be.visible')
	})

	it('Select a custom color', function() {
		cy.intercept('*/apps/theming/background/color').as('setColor')

		cy.get('[data-user-theming-background-color]').click()
		cy.get('.color-picker__simple-color-circle').eq(5).click()

		// Validate custom colour change
		cy.wait('@setColor')
		cy.waitUntil(() => validateBodyThemingCss(defaultPrimary, null, '#a5b872'))
	})
})

describe('User select a bright custom color and remove background', function() {
	before(function() {
		cy.createRandomUser().then((user: User) => {
			cy.login(user)
		})
	})

	it('See the user background settings', function() {
		cy.visit('/settings/user/theming')
		cy.get('[data-user-theming-background-settings]').scrollIntoView()
		cy.get('[data-user-theming-background-settings]').should('be.visible')
	})

	it('Remove background', function() {
		cy.intercept('*/apps/theming/background/color').as('clearBackground')

		// Clear background
		cy.get('[data-user-theming-background-color]').click()
		cy.get('[data-user-theming-background-color]').click()

		// Validate clear background
		cy.wait('@clearBackground')
		cy.waitUntil(() => validateBodyThemingCss(undefined, null))
	})

	it('Select a custom color', function() {
		cy.intercept('*/apps/theming/background/color').as('setColor')

		// Pick one of the bright color preset
		cy.get('[data-user-theming-background-color]').scrollIntoView()
		cy.get('[data-user-theming-background-color]').click()
		cy.get('.color-picker__simple-color-circle:eq(4)').click()

		// Validate custom colour change
		cy.wait('@setColor')
	})

	it('See the header being inverted', function() {
		cy.waitUntil(() => cy.window().then((win) => {
			const firstEntry = win.document.querySelector('.app-menu-main li img')
			if (!firstEntry) {
				return false
			}
			return getComputedStyle(firstEntry).filter === 'invert(1)'
		}))
	})

	it('Select another but non-bright shipped background', function() {
		const background = 'anatoly-mikhaltsov-butterfly-wing-scale.jpg'
		cy.intercept('*/apps/theming/background/shipped').as('setBackground')

		// Select background
		cy.get(`[data-user-theming-background-shipped="${background}"]`).click()

		// Validate changed background and primary
		cy.wait('@setBackground')
		cy.waitUntil(() => validateBodyThemingCss('#a53c17', background, '#652e11'))
	})

	it('See the header NOT being inverted this time', function() {
		cy.waitUntil(() => cy.window().then((win) => {
			const firstEntry = win.document.querySelector('.app-menu-main li')
			if (!firstEntry) {
				return false
			}
			return getComputedStyle(firstEntry).filter === 'none'
		}))
	})
})

describe('User select a custom background', function() {
	const image = 'image.jpg'
	before(function() {
		cy.createRandomUser().then((user: User) => {
			cy.uploadFile(user, image, 'image/jpeg')
			cy.login(user)
		})
	})

	it('See the user background settings', function() {
		cy.visit('/settings/user/theming')
		cy.get('[data-user-theming-background-settings]').scrollIntoView()
		cy.get('[data-user-theming-background-settings]').should('be.visible')
	})

	it('Select a custom background', function() {
		cy.intercept('*/apps/theming/background/custom').as('setBackground')

		cy.on('uncaught:exception', (err) => {
			// This can happen because of blink engine & skeleton animation, its not a bug just engine related.
			if (err.message.includes('ResizeObserver loop limit exceeded')) {
			  return false
			}
		})

		// Pick background
		cy.get('[data-user-theming-background-custom]').click()
		cy.get('.file-picker__files tr').contains(image).click()
		cy.get('.dialog__actions .button-vue--vue-primary').click()

		// Wait for background to be set
		cy.wait('@setBackground')
		cy.waitUntil(() => validateBodyThemingCss(defaultPrimary, 'apps/theming/background?v=', '#2f2221'))
	})
})

describe('User changes settings and reload the page', function() {
	const image = 'image.jpg'
	const colorFromImage = '#2f2221'

	before(function() {
		cy.createRandomUser().then((user: User) => {
			cy.uploadFile(user, image, 'image/jpeg')
			cy.login(user)
		})
	})

	it('See the user background settings', function() {
		cy.visit('/settings/user/theming')
		cy.get('[data-user-theming-background-settings]').scrollIntoView()
		cy.get('[data-user-theming-background-settings]').should('be.visible')
	})

	it('Select a custom background', function() {
		cy.intercept('*/apps/theming/background/custom').as('setBackground')

		cy.on('uncaught:exception', (err) => {
			// This can happen because of blink engine & skeleton animation, its not a bug just engine related.
			if (err.message.includes('ResizeObserver loop limit exceeded')) {
			  return false
			}
		})

		// Pick background
		cy.get('[data-user-theming-background-custom]').click()
		cy.get('.file-picker__files tr').contains(image).click()
		cy.get('.dialog__actions .button-vue--vue-primary').click()

		// Wait for background to be set
		cy.wait('@setBackground')
		cy.waitUntil(() => validateBodyThemingCss(defaultPrimary, 'apps/theming/background?v=', colorFromImage))
	})

	it('Select a custom color', function() {
		cy.intercept('*/apps/theming/background/color').as('setColor')

		cy.get('[data-user-theming-background-color]').click()
		cy.get('.color-picker__simple-color-circle:eq(5)').click()
		cy.get('[data-user-theming-background-color]').click()

		// Validate clear background
		cy.wait('@setColor')
		cy.waitUntil(() => validateBodyThemingCss(defaultPrimary, null, '#a5b872'))
	})

	it('Select a custom primary color', function() {
		cy.intercept('/ocs/v2.php/apps/provisioning_api/api/v1/config/users/theming/primary_color').as('setPrimaryColor')

		cy.get('[data-user-theming-primary-color-trigger]').scrollIntoView()
		cy.get('[data-user-theming-primary-color-trigger]').click()
		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.wait(500)
		cy.get('.color-picker__simple-color-circle').should('be.visible')
		cy.get('.color-picker__simple-color-circle:eq(2)').click()
		cy.get('[data-user-theming-primary-color-trigger]').click()

		// Validate clear background
		cy.wait('@setPrimaryColor')
		cy.waitUntil(() => validateBodyThemingCss('#c98879', null, '#a5b872'))
	})

	it('Reload the page and validate persistent changes', function() {
		cy.reload()
		cy.waitUntil(() => validateBodyThemingCss('#c98879', null, '#a5b872'))
	})
})
