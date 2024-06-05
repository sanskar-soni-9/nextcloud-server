<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\DB;

class AdapterMySQL extends Adapter {
	/** @var string */
	protected $collation;

	/**
	 * @param string $tableName
	 */
	public function lockTable($tableName) {
		$this->conn->executeUpdate('LOCK TABLES `' .$tableName . '` WRITE');
	}

	public function unlockTable() {
		$this->conn->executeUpdate('UNLOCK TABLES');
	}

	public function fixupStatement($statement) {
		$statement = str_replace(' ILIKE ', ' COLLATE ' . $this->getCollation() . ' LIKE ', $statement);
		return $statement;
	}

	protected function getCollation(): string {
		if (!$this->collation) {
			$params = $this->conn->getParams();
			$this->collation = $params['collation'] ?? (($params['charset'] ?? 'utf8') . '_general_ci');
		}

		return $this->collation;
	}

	public function insertIgnoreConflict(string $table, array $values): int {
		$builder = $this->conn->getQueryBuilder();
		$builder->insert($table);
		$updates = [];
		foreach ($values as $key => $value) {
			$builder->setValue($key, $builder->createNamedParameter($value));
		}

		$field = key($values);
		return $this->conn->executeStatement(
			$builder->getSQL() . ' ON DUPLICATE KEY UPDATE `'.$field.'` = `'.$field.'`',
			$builder->getParameters(),
			$builder->getParameterTypes()
		);
	}
}
