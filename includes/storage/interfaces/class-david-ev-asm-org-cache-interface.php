<?php
/**
 * David_Ev_Asm_Org_Cache
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Storage\Interfaces;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Cache provider.
 *
 * @package DavidEvAsmApiPlugin
 */
interface David_Ev_Asm_Org_Cache_Interface {

	/**
	 * Main David_Ev_Asm_Org_Db_Cache Instance.
	 * Ensures only one instance of David_Ev_Asm_Org_Db_Cache is loaded or can be loaded.
	 *
	 * @return self Main instance.
	 */
	public static function instance(): self;

	/**
	 * Cache getter.
	 *
	 * @return mixed
	 */
	public function get_persons(): mixed;

	/**
	 * Cache setter.
	 *
	 * @param string $value Content to cache.
	 *
	 * @return void
	 */
	public function put_persons( string $value ): void;
}
