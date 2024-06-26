<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCP\AppFramework\Db;

use OC\DB\Exceptions\DbalException;
use OCP\DB\Exception;
use OCP\IDBConnection;
use Throwable;
use function OCP\Log\logger;

/**
 * Helper trait for transactional operations
 *
 * @since 24.0.0
 */
trait TTransactional {
	/**
	 * Run an atomic database operation
	 *
	 * - Commit if no exceptions are thrown, return the callable result
	 * - Revert otherwise and rethrows the exception
	 *
	 * @template T
	 * @param callable $fn
	 * @psalm-param callable():T $fn
	 * @param IDBConnection $db
	 *
	 * @return mixed the result of the passed callable
	 * @psalm-return T
	 *
	 * @throws Exception for possible errors of commit or rollback or the custom operations within the closure
	 * @throws Throwable any other error caused by the closure
	 *
	 * @since 24.0.0
	 * @see https://docs.nextcloud.com/server/latest/developer_manual/basics/storage/database.html#transactions
	 */
	protected function atomic(callable $fn, IDBConnection $db) {
		$db->beginTransaction();
		try {
			$result = $fn();
			$db->commit();
			return $result;
		} catch (Throwable $e) {
			$db->rollBack();
			throw $e;
		}
	}

	/**
	 * Wrapper around atomic() to retry after a retryable exception occurred
	 *
	 * Certain transactions might need to be retried. This is especially useful
	 * in highly concurrent requests where a deadlocks is thrown by the database
	 * without waiting for the lock to be freed (e.g. due to MySQL/MariaDB deadlock
	 * detection)
	 *
	 * @template T
	 * @param callable $fn
	 * @psalm-param callable():T $fn
	 * @param IDBConnection $db
	 * @param int $maxRetries
	 *
	 * @return mixed the result of the passed callable
	 * @psalm-return T
	 *
	 * @throws Exception for possible errors of commit or rollback or the custom operations within the closure
	 * @throws Throwable any other error caused by the closure
	 *
	 * @since 27.0.0
	 */
	protected function atomicRetry(callable $fn, IDBConnection $db, int $maxRetries = 3): mixed {
		for ($i = 0; $i < $maxRetries; $i++) {
			try {
				return $this->atomic($fn, $db);
			} catch (DbalException $e) {
				if (!$e->isRetryable() || $i === ($maxRetries - 1)) {
					throw $e;
				}
				logger('core')->warning('Retrying operation after retryable exception.', [ 'exception' => $e ]);
			}
		}
	}
}
