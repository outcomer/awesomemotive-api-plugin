<?php
/**
 * David_Ev_Asm_Cli
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Command;

use WP_CLI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * CLI operations.
 *
 * @package DavidEvAsmApiPlugin
 */
abstract class David_Ev_Asm_Abstract_Commands {

	const COMMAND_NAMESPACE = 'david-ev-asm';

	/**
	 * Commands register.
	 *
	 * @param string $name Command name.
	 *
	 * @return void
	 */
	protected function register_commands( string $name ): void {
		if ( ! defined( 'WP_CLI' ) || ! WP_CLI ) {
			return;
		}
		WP_CLI::add_command( self::COMMAND_NAMESPACE . ":{$name}", $this );
	}
}
