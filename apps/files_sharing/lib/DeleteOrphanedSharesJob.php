<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Morris Jobke <hey@morrisjobke.de>
 * @author Vincent Petry <vincent@nextcloud.com>
 *
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 *
 */
namespace OCA\Files_Sharing;

use OCP\AppFramework\Db\TTransactional;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;

/**
 * Delete all share entries that have no matching entries in the file cache table.
 */
class DeleteOrphanedSharesJob extends TimedJob {

	use TTransactional;

	private const CHUNK_SIZE = 1000;

	private const INTERVAL = 24 * 60 * 60; // 1 day

	private IDBConnection $db;

	private LoggerInterface $logger;

	/**
	 * sets the correct interval for this timed job
	 */
	public function __construct(
		ITimeFactory $time,
		IDBConnection $db,
		LoggerInterface $logger
	) {
		parent::__construct($time);

		$this->db = $db;

		$this->setInterval(self::INTERVAL); // 1 day
		$this->setTimeSensitivity(self::TIME_INSENSITIVE);
		$this->logger = $logger;
	}

	/**
	 * Makes the background job do its work
	 *
	 * @param array $argument unused argument
	 */
	public function run($argument) {
		$connection = \OC::$server->getDatabaseConnection();
		$logger = \OC::$server->getLogger();

		$sql =
			'DELETE FROM `*PREFIX*share` ' .
			'WHERE `item_type` in (\'file\', \'folder\') ' .
			'AND NOT EXISTS (SELECT `fileid` FROM `*PREFIX*filecache` WHERE `file_source` = `fileid`)';

		$deletedEntries = $connection->executeUpdate($sql);
		$logger->debug("$deletedEntries orphaned share(s) deleted", ['app' => 'DeleteOrphanedSharesJob']);
	}
}
