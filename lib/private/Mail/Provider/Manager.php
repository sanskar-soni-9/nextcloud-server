<?php
declare(strict_types=1);

/**
* @copyright Copyright (c) 2023 Sebastian Krupinski <krupinski01@gmail.com>
*
* @author Sebastian Krupinski <krupinski01@gmail.com>
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
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
*/
namespace OC\Mail\Provider;

use OC\AppFramework\Bootstrap\Coordinator;
use OCP\IConfig;
use OCP\IServerContainer;
use OCP\Mail\Provider\IManager;
use OCP\Mail\Provider\IProvider;
use OCP\Mail\Provider\IService;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use RuntimeException;
use Throwable;

class Manager implements IManager {
	
	protected ?array $providersCollection = null;

	public function __construct(
		private Coordinator $coordinator,
		private ContainerInterface $container,
		private LoggerInterface $logger,
	) {
	}

	/**
	 * Register a mail provider
	 * 
	 * @since 30.0.0
	 */
	public function register(IProvider $value): void {

		// add provider to internal collection
		$this->providersCollection[$provider->id()] = $value;
		
	}

	/**
	 * Determain if any mail providers are registered
	 * 
	 * @since 30.0.0
	 * @return bool
	 */
	public function has(): bool {

		// return true if collection has any providers
		return count($this->providers()) > 0;

	}

	/**
	 * Retrieve a count of how many mail providers are registered
	 * 
	 * @since 30.0.0
	 * @return int
	 */
	public function count(): int {

		// return count of providers in collection
		return count($this->providers());

	}

	/**
	 * Retrieve which mail providers are registered
	 * 
	 * @since 30.0.0
	 * @return array<int,String>
	 */
	public function types(): array {
		
		// construct types collection
		$types = [];
		// extract id and name from providers collection
		foreach ($this->providers() as $entry) {
			$types[$entry->id()] = $entry->label(); 
		}
		// return types collection
		return $types;
		
	}

	/**
	 * Retrieve all registered mail providers
	 * 
	 * @since 30.0.0
	 * @return array<int,IProvider>
	 */
	public function providers(): array {

		// evaluate if we already have a cached collection of providers and return the collection if we do
		if (is_array($this->providersCollection)) {
			return $this->providersCollection;
		}
		// retrieve server registration context
		$context = $this->coordinator->getRegistrationContext();
		// evaluate if registration context was returned
		if ($context === null) {
			return [];
		}
		// initilize cached collection
		$this->providersCollection = [];
		// iterate through all registered mail providers
		foreach ($context->getMailProviders() as $entry) {
			try {
				/** @var IMailProvider $provider */
				$this->providersCollection[] = $this->container->get($entry->getService());
			} catch (Throwable $e) {
				$this->logger->error('Could not load mail provider ' . $entry->getService() . ': ' . $e->getMessage(), [
					'exception' => $e,
				]);
			}
		}
		// return mail provider collection
		return $this->providersCollection;

	}

	/**
	 * Retrieve all services for all registered mail providers
	 * 
	 * @since 30.0.0
	 * @param string $uid				user id
	 * @return array<int,IService>		returns collection of service objects or null if non found
	 */
	public function services(string $uid): array {
		
		// initilize collection
		$services = [];
		// retrieve and iterate through mail providers
		foreach ($this->providers() as $entry) {
			// extract id and services from providers collection
			$services[$entry->id()] = $entry->listServices($uid);
		}
		// return collection
		return $services;
		
	}

	/**
	 * Retrieve a service for a specific mail address
	 * returns first service with specific primary address
	 * 
	 * @since 30.0.0
	 * @param string $uid				user id
	 * @param string $address			mail address (e.g. test@example.com)
	 * @return IService					returns service object or null if non found
	 */
	public function findService(string $uid, string $address): IService | null {
		
		// retrieve and iterate through mail providers
		foreach ($this->providers() as $provider) {
			// retrieve and iterate through mail services
			foreach ($provider->listServices($uid) as $service) {
				// evaluate if primary mail address matches
				if ($service->getPrimaryAddress()->getAddress() == $address) {
					return $service;
				}
			}
		}
		// return null if no match was found
		return null;

	}
}
