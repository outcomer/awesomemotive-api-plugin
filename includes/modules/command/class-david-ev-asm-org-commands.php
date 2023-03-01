<?php
/**
 * David_Ev_Asm_Cli
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Command;

use DavidEv\Asm\ApiPlugin\Includes\Storage\David_Ev_Asm_Org_Db_Cache;
use DavidEv\Asm\ApiPlugin\Includes\Modules\Command\David_Ev_Asm_Abstract_Commands;
use WP_CLI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * CLI operations with organization.
 *
 * @package DavidEvAsmApiPlugin
 */
final class David_Ev_Asm_Org_Commands extends David_Ev_Asm_Abstract_Commands {

	/**
	 * List of commands.
	 *
	 * @var array
	 */
	private $commands = [
		'org_cache_persons',
	];

	/**
	 * The single instance of the class.
	 *
	 * @var David_Ev_Asm_Org_Commands
	 */
	private static ?David_Ev_Asm_Org_Commands $instance = null;

	/**
	 * David_Ev_Asm_Org_Commands Constructor.
	 *
	 * @return void
	 */
	private function __construct() {
		foreach ( $this->commands as $command ) {
			$this->register_commands( $command );
		}
	}

	/**
	 * Main David_Ev_Asm_Org_Commands Instance.
	 * Ensures only one instance of David_Ev_Asm_Org_Commands is loaded or can be loaded.
	 *
	 * @return self Main instance.
	 */
	public static function instance(): self {

		if ( is_null( self::$instance ) ) {

			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Commands register.
	 *
	 * @return void
	 */

	/**
	 * Resets the cache of persons.
	 *
	 * ## USAGE
	 *
	 *     wp david-ev-asm org_cache_persons delete
	 *
	 * @param array $args       Array of arguments.
	 * @param array $assoc_args Array of options.
	 *
	 * @subcommand delete
	 *
	 * @return void
	 */
	public function org_cache_persons( array $args, array $assoc_args ): void {
		David_Ev_Asm_Org_Db_Cache::instance()->persons_delete();
		WP_CLI::success( 'Done!' );
	}
}
