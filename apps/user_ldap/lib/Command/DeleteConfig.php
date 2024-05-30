<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Martin Konrad <info@martin-konrad.net>
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
namespace OCA\User_LDAP\Command;

use OCA\User_LDAP\Helper;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class DeleteConfig extends Command {
	public function __construct(
		protected Helper $helper,
	) {
		parent::__construct();
	}

	protected function configure(): void {
		$this
			->setName('ldap:delete-config')
			->setDescription('deletes an existing LDAP configuration')
			->addArgument(
				'configID',
				InputArgument::REQUIRED,
				'the configuration ID'
			)
		;
	}

	protected function execute(InputInterface $input, OutputInterface $output): int {
		$configPrefix = $input->getArgument('configID');

		$success = $this->helper->deleteServerConfiguration($configPrefix);

		if (!$success) {
			$output->writeln("Cannot delete configuration with configID '{$configPrefix}'");
			return self::FAILURE;
		}

		$output->writeln("Deleted configuration with configID '{$configPrefix}'");
		return self::SUCCESS;
	}
}
