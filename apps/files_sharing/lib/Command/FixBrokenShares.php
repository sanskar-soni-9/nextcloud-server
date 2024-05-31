<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2023 Robin Appelman <robin@icewind.nl>
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

namespace OCA\Files_Sharing\Command;

use OC\Core\Command\Base;
use OCA\Files_Sharing\OrphanHelper;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class FixBrokenShares extends Base {
	private OrphanHelper $orphanHelper;

	public function __construct(OrphanHelper $orphanHelper) {
		parent::__construct();
		$this->orphanHelper = $orphanHelper;
	}

	protected function configure(): void {
		$this
			->setName('sharing:fix-broken-shares')
			->setDescription('Fix broken shares after transfer ownership');
	}

	public function execute(InputInterface $input, OutputInterface $output): int {
		$shares = $this->orphanHelper->getAllShares();

		foreach ($shares as $share) {
			if ($this->orphanHelper->isShareValid($share['owner'], $share['fileid']) || !$this->orphanHelper->fileExists($share['fileid'])) {
				continue;
			}

			$owner = $this->orphanHelper->findOwner($share['fileid']);

			if (!empty($owner)) {
				$this->orphanHelper->updateShareOwner($share['id'], $owner);
				$output->writeln("Share {$share['id']} updated to owner $owner");
			}
		}

		return 0;
	}
}
