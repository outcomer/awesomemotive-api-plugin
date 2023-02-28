<?php
/**
 * David_Ev_Asm_Repository
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Storage;

use DavidEv\Asm\ApiPlugin\Includes\Storage\Interfaces\David_Ev_Asm_Org_Data_Provider_Interface as Data_Provider_Interface;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Data storage.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Org_Repository {

	/**
	 * Transport.
	 *
	 * @var Data_Provider_Interface
	 */
	private Data_Provider_Interface $data_provider;

	/**
	 * David_Ev_Asm_Repository Constructor.
	 *
	 * @param Data_Provider_Interface $data_provider As it said.
	 */
	public function __construct( Data_Provider_Interface $data_provider ) {
		$this->data_provider = $data_provider;
	}

	/**
	 * API endpoint fetcher.
	 *
	 * @throws Exception On any unexpected response.
	 *
	 * @return object
	 */
	public function get_persons(): object {
		return $this->data_provider->fetch_persons();
	}
}
