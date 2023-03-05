<?php
/**
 * David_Ev_Asm_Menu
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Admin;

use DavidEv\Asm\ApiPlugin\Includes\Modules\Admin\David_Ev_Asm_Menu_Persons;
use DavidEv\Asm\ApiPlugin\Includes\Modules\Admin\Interfaces\David_Ev_Asm_Menu_Interface as Menu_Interface;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * All plugin settings are here.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Menu implements Menu_Interface {

	/**
	 * Single instance of the class.
	 *
	 * @var David_Ev_Asm_Menu
	 */
	private static ?David_Ev_Asm_Menu $instance = null;

	/**
	 * David_Ev_Asm_Menu Constructor.
	 */
	private function __construct() {
		$this->admin_menu();
	}

	/**
	 * David_Ev_Asm_Menu Instance.
	 * Ensures only one instance of David_Ev_Asm_Menu is loaded or can be loaded.
	 *
	 * @return self Instance.
	 */
	public static function instance(): self {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Enqueue required for this class WP hooks.
	 * To remove any of hooks applied in this class get class instance by:
	 * david_ev_asm_api_plugin()->get_module_setup() and remove them.
	 * Example: remove_filter( 'hook name', [ david_ev_asm_api_plugin()->get_module_setup(), 'callback to remove' ], priority).
	 *
	 * @return void
	 */
	private function admin_menu(): void {
		add_action( 'admin_menu', [ $this, 'add_admin_options_page' ] );
	}


	/**
	 * Add admin area menu item.
	 *
	 * @return void
	 */
	public function add_admin_options_page(): void {

		$menu_page_main_instance = new David_Ev_Asm_Menu_Persons();

		$parent_slug = DAVID_E_ASM_ASSET_NAME_PREFIX . 'org-persons';

		$menu_page_parent_hook = add_menu_page(
			esc_html__( 'David Ev ASM', 'david-ev-asm-api-plugin' ),
			esc_html__( 'David Ev ASM', 'david-ev-asm-api-plugin' ),
			'manage_options',
			$parent_slug,
			[ $menu_page_main_instance, 'display' ],
			'dashicons-screenoptions',
			100
		);

		$menu_page_main_instance->init( $menu_page_parent_hook );

		/**
		 * Fire after admin menu registered in WP
		 *
		 * @hook david_ev_asm_api_plugin__admin_menu_created
		 */
		do_action( 'david_ev_asm_api_plugin__all_admin_menu_created' );
	}
}
