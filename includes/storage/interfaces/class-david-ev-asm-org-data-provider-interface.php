<?php
/**
 * David_Ev_Asm_Org_Api_Client_Interface
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Storage\Interfaces;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * API fetcher interface.
 *
 * @package DavidEvAsmApiPlugin
 */
interface David_Ev_Asm_Org_Data_Provider_Interface {

	/**
	 * API endpoint fetcher.
	 *
	 * @param bool $no_cache Whether to update the cache.
	 *
	 * @throws Exception On any unexpected response.
	 *
	 * @return object
	 */
	public function fetch_persons( bool $no_cache = false ): object;
}
