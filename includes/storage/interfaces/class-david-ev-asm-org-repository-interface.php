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
 * Data storage.
 *
 * @package DavidEvAsmApiPlugin
 */
interface David_Ev_Asm_Org_Repository_Interface {

	/**
	 * Persons getter.
	 *
	 * @return object
	 */
	public function persons_get(): object;
}
