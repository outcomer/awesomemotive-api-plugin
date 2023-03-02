<?php
/**
 * David_Ev_Asm_Repository
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Storage;

use DavidEv\Asm\ApiPlugin\Includes\Storage\Interfaces\David_Ev_Asm_Org_Cache_Interface as Cache_Interface;
use DavidEv\Asm\ApiPlugin\Includes\Storage\Interfaces\David_Ev_Asm_Org_Data_Provider_Interface as Data_Provider_Interface;
use DavidEv\Asm\ApiPlugin\Includes\Storage\Interfaces\David_Ev_Asm_Org_Repository_Interface as Repository_Interface;

use DavidEv\Asm\ApiPlugin\Includes\Storage\David_Ev_Asm_Org_Db_Cache as Org_Cache;
use DavidEv\Asm\ApiPlugin\Includes\Storage\David_Ev_Asm_Org_Api_Client as Org_Api_Client;


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Data storage.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Org_Repository implements Repository_Interface {

	/**
	 * Transport.
	 *
	 * @var Data_Provider_Interface
	 */
	private Data_Provider_Interface $data_provider;

	/**
	 * Transport.
	 *
	 * @var Cache_Interface
	 */
	private Cache_Interface $cache_provider;

	/**
	 * David_Ev_Asm_Repository Constructor.
	 */
	public function __construct() {
		$this->cache_provider = new Org_Cache();
		$this->data_provider  = new Org_Api_Client( $this->cache_provider );
	}

	/**
	 * Persons getter.
	 *
	 * @param array $args Gow to fetch info.
	 *
	 * @return object
	 */
	public function persons_get( array $args = [] ): object {
		$args = wp_parse_args(
			$args,
			[
				'no-cache' => false,
			]
		);
		return $this->data_provider->fetch_persons( no_cache: $args['no-cache'] );
	}
}
