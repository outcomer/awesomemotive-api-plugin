<?php
/**
 * David_Ev_Asm_Menu_Item
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Admin\Interfaces;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * All plugin settings are here.
 *
 * @package DavidEvAsmApiPlugin
 */
interface David_Ev_Asm_Menu_Item_Interface {

	/**
	 * Menu page hook setter.
	 *
	 * @param string $menu_page_hook Page name registered within WP.
	 *
	 * @return void
	 */
	public function init( string $menu_page_hook ): void;

	/**
	 * Trigger render content.
	 *
	 * @return void
	 */
	public function display(): void;
}
