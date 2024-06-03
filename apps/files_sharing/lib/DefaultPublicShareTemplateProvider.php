<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2023 Louis Chemineau <louis@chmn.me>
 *
 * @license GNU AGPL version 3 or any later version
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
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Files_Sharing;

use OCA\FederatedFileSharing\FederatedShareProvider;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent;
use OCA\Viewer\Event\LoadViewer;
use OCP\Accounts\IAccountManager;
use OCP\AppFramework\Http\ContentSecurityPolicy;
use OCP\AppFramework\Http\Template\PublicTemplateResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\Defaults;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\IConfig;
use OCP\IL10N;
use OCP\IPreview;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUser;
use OCP\IUserManager;
use OCP\Share\IPublicShareTemplateProvider;
use OCP\Share\IShare;
use OCP\Util;

class DefaultPublicShareTemplateProvider implements IPublicShareTemplateProvider {

	public function __construct(
		protected FederatedShareProvider $federatedShareProvider,
		private IUserManager $userManager,
		private IAccountManager $accountManager,
		private IPreview $previewManager,
		private IUrlGenerator $urlGenerator,
		private IEventDispatcher $eventDispatcher,
		private IL10N $l10n,
		private Defaults $defaults,
		private IConfig $config,
		private IRequest $request,
		private IInitialState $initialState,
	) {
	}

	public function shouldRespond(IShare $share): bool {
		return true;
	}

	public function renderPage(IShare $share, string $token, string $path): TemplateResponse {
		$shareNode = $share->getNode();
		$shareInfo = [
			'ownerId' => '',
			'ownerName' => '',
			'filename' => $shareNode->getName(),
		];

		// Only make the share owner public if they allowed to show their name
		$owner = $this->userManager->get($share->getShareOwner());
		if ($owner instanceof IUser) {
			$ownerAccount = $this->accountManager->getAccount($owner);

			$ownerName = $ownerAccount->getProperty(IAccountManager::PROPERTY_DISPLAYNAME);
			if ($ownerName->getScope() === IAccountManager::SCOPE_PUBLISHED) {
				$shareInfo['ownerId'] = $owner->getUID();
				$shareInfo['ownerName'] = $owner->getDisplayName();
			}
		}

		// Set up initial state
		$this->initialState->provideInitialState('isPublic', true);
		$this->initialState->provideInitialState('sharingToken', $token);

		// Load scripts and styles for UI
		\OCP\Util::addInitScript('files', 'init');
		\OCP\Util::addInitScript('files_sharing', 'init-public');
		\OCP\Util::addScript('files', 'main');
		\OCP\Util::addStyle('files', 'merged');

		// Load Viewer scripts
		if (class_exists(LoadViewer::class)) {
			$this->eventDispatcher->dispatchTyped(new LoadViewer());
		}

		// Allow external apps to register their scripts
		$this->eventDispatcher->dispatchTyped(new BeforeTemplateRenderedEvent($share));

		// OpenGraph Support: http://ogp.me/
		$this->addOpenGraphHeaders($share);

		// CSP to allow office
		$csp = new ContentSecurityPolicy();
		$csp->addAllowedFrameDomain('\'self\'');

		$response = new PublicTemplateResponse(
			'files',
			'index',
		);
		$response->setContentSecurityPolicy($csp);
		$response->setHeaderTitle($shareInfo['filename']);
		if ($shareInfo['ownerName'] !== '') {
			$response->setHeaderDetails($this->l10n->t('shared by %s', [$shareInfo['ownerName']]));
		}

		return $response;
	}

	/**
	 * Add OpenGraph headers to response for preview
	 * @param IShare $share The share for which to add the headers
	 */
	protected function addOpenGraphHeaders(IShare $share) {
		$shareNode = $share->getNode();
		$token = $share->getToken();
		$shareUrl = $this->urlGenerator->linkToRouteAbsolute('files_sharing.sharecontroller.showShare', ['token' => $token]);

		// Handle preview generation for OpenGraph
		if ($this->previewManager->isMimeSupported($shareNode->getMimetype())) {
			// For images we can use direct links
			if ($shareNode->getMimePart() === 'image') {
				$ogPreview = $this->urlGenerator->linkToRouteAbsolute('files_sharing.publicpreview.directLink', ['token' => $token]);
				//Whatapp is kind of picky about their size requirements
				if ($this->request->isUserAgent(['/^WhatsApp/'])) {
					$ogPreview = $this->urlGenerator->linkToRouteAbsolute('files_sharing.PublicPreview.getPreview', [
						'token' => $token,
						'x' => 256,
						'y' => 256,
						'a' => true,
					]);
				}
			} else {
				// For normal files use preview API
				$ogPreview = $this->urlGenerator->linkToRouteAbsolute(
					'files_sharing.PublicPreview.getPreview',
					[
						'x' => 256,
						'y' => 256,
						'file' => $share->getTarget(),
						'token' => $token,
					],
				);
			}
		} else {
			// No preview supported, so we just add the favicon
			$ogPreview = $this->urlGenerator->getAbsoluteURL($this->urlGenerator->imagePath('core', 'favicon-fb.png'));
		}

		Util::addHeader('meta', ['property' => "og:title", 'content' => $shareNode->getName()]);
		Util::addHeader('meta', ['property' => "og:description", 'content' => $this->defaults->getName() . ($this->defaults->getSlogan() !== '' ? ' - ' . $this->defaults->getSlogan() : '')]);
		Util::addHeader('meta', ['property' => "og:site_name", 'content' => $this->defaults->getName()]);
		Util::addHeader('meta', ['property' => "og:url", 'content' => $shareUrl]);
		Util::addHeader('meta', ['property' => "og:type", 'content' => "object"]);
		Util::addHeader('meta', ['property' => "og:image", 'content' => $ogPreview]);
	}
}
