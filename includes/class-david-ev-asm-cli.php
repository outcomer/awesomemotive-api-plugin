<?php
/**
 * David_Ev_Asm_Cli
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes;

use DavidEv\Asm\ApiPlugin\Includes\Storage\David_Ev_Asm_Org_Db_Cache;
use WP_CLI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Cli operations.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Cli {

	/**
	 * Resets the cache of persons.
	 *
	 * @param array $args        [$args description]
	 * @param array $assoc_args  [$assoc_args description]
	 *
	 * @subcommand persons-delete
	 *
	 * @return void
	 */
	public function david_ev_asm_org_cache( array $args, array $assoc_args ): void {
		David_Ev_Asm_Org_Db_Cache::instance()->persons_delete();
		WP_CLI::success( 'Done!' );
	}
}
