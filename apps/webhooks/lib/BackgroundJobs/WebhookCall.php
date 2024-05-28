<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Webhooks\BackgroundJobs;

use OCA\Webhooks\Db\WebhookListenerMapper;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\QueuedJob;
use OCP\Http\Client\IClientService;
use Psr\Log\LoggerInterface;

class WebhookCall extends QueuedJob {
	public function __construct(
		private IClientService $clientService,
		private WebhookListenerMapper $mapper,
		private LoggerInterface $logger,
		ITimeFactory $timeFactory,
	) {
		parent::__construct($timeFactory);
	}

	protected function run($argument): void {
		[$event, $userId, $webhookId] = $argument;
		$webhookListener = $this->mapper->getById($webhookId);
		$client = $this->clientService->newClient();
		$options = [];
		$options['body'] = json_encode([
			'event' => $event,
			'userid' => $userId,
		]);
		try {
			$response = $client->request($webhookListener->getHttpMethod(), $webhookListener->getUri(), $options);
			$statusCode = $response->getStatusCode();
			if ($statusCode >= 200 && $statusCode < 300) {
				$this->logger->warning('Webhook returned unexpected status code '.$statusCode, ['body' => $response->getBody()]);
			} else {
				$this->logger->debug('Webhook returned status code '.$statusCode, ['body' => $response->getBody()]);
			}
		} catch (\Exception $e) {
			$this->logger->error('Webhook call failed: '.$e->getMessage(), ['exception' => $e]);
		}
	}
}
