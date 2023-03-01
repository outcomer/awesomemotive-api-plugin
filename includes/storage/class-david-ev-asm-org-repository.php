<?php
/**
 * David_Ev_Asm_Repository
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Storage;

use DavidEv\Asm\ApiPlugin\Includes\Storage\Interfaces\David_Ev_Asm_Org_Data_Provider_Interface as Data_Provider_Interface;
use DavidEv\Asm\ApiPlugin\Includes\Storage\Interfaces\David_Ev_Asm_Org_Repository_Interface as Repository_Interface;

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
	 * David_Ev_Asm_Repository Constructor.
	 *
	 * @param Data_Provider_Interface $data_provider As it said.
	 */
	public function __construct( Data_Provider_Interface $data_provider ) {
		$this->data_provider = $data_provider;
	}

	/**
	 * Persons getter.
	 *
	 * @return object
	 */
	public function persons_get(): object {
		return $this->data_provider->fetch_persons();
	}
}