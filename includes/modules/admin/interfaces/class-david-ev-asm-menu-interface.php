<?php
/**
 * David_Ev_Asm_Menu_Interface
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
interface David_Ev_Asm_Menu_Interface {

	/**
	 * David_Ev_Asm_Menu_Interface Instance.
	 * Ensures only one instance of David_Ev_Asm_Menu_Interface is loaded or can be loaded.
	 *
	 * @return self Instance.
	 */
	public static function instance(): self;

	/**
	 * Add admin area menu item.
	 *
	 * @return void
	 */
	public function add_admin_options_page(): void;
}
