<?php
/**
 * David_Ev_Asm_Org_Cache
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Storage;

use DavidEv\Asm\ApiPlugin\Includes\Storage\Interfaces\David_Ev_Asm_Org_Cache_Interface as Cache_Interface;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Cache provider.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Org_Db_Cache implements Cache_Interface {

	/**
	 * Cache lifetime.
	 *
	 * @var int
	 */
	const TTL_PERSONS = HOUR_IN_SECONDS;

	/**
	 * Cache key for persons.
	 *
	 * @var string
	 */
	const CACHE_KEY_PERSONS = 'david_ev_asm_persons';

	/**
	 * The single instance of the class.
	 *
	 * @var David_Ev_Asm_Org_Db_Cache
	 */
	private static ?David_Ev_Asm_Org_Db_Cache $instance = null;

	/**
	 * Main David_Ev_Asm_Org_Db_Cache Instance.
	 * Ensures only one instance of David_Ev_Asm_Org_Db_Cache is loaded or can be loaded.
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
	 * Cache getter.
	 *
	 * @return mixed
	 */
	public function get_persons(): mixed {
		return get_transient( self::CACHE_KEY_PERSONS );
	}

	/**
	 * Cache setter.
	 *
	 * @param string $value Content to cache.
	 *
	 * @return void
	 */
	public function put_persons( string $value ): void {
		set_transient( self::CACHE_KEY_PERSONS, $value, self::TTL_PERSONS );
	}
}
