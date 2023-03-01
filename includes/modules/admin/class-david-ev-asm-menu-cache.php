<?php
/**
 * David_Ev_Asm_Menu_Item
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Admin;

use DavidEv\Asm\ApiPlugin\Includes\Modules\Admin\View\David_Ev_Asm_View_Cache;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * All plugin settings are here.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Menu_Cache {

	const PAGE_SLUG = DAVID_E_ASM_ASSET_NAME_PREFIX . 'admin-page';

	/**
	 * Resolved menu page slug.
	 *
	 * @var string
	 */
	private string $menu_page_hook;

	/**
	 * View instance.
	 *
	 * @var David_Ev_Asm_View_Cache
	 */
	private David_Ev_Asm_View_Cache $view;

	/**
	 * David_Ev_Asm_Menu_Item Constructor.
	 */
	public function __construct() {
		$this->add_admin_options_page();
		$this->bootstrap_page_load();
	}

	/**
	 * Add admin area menu item.
	 *
	 * @return void
	 */
	public function add_admin_options_page(): void {

		$this->menu_page_hook = add_menu_page(
			esc_html__( 'David Ev ASM', 'david-ev-asm-api-plugin' ),
			esc_html__( 'David Ev ASM', 'david-ev-asm-api-plugin' ),
			'manage_options',
			self::PAGE_SLUG,
			[ $this, 'show' ],
			'dashicons-screenoptions',
			100
		);

		/**
		 * Fire after admin menu registered in WP
		 *
		 * @param string $menu_page_hook Reference to page slug
		 * @hook david_ev_asm_api_plugin__admin_menu_created
		 */
		do_action( 'david_ev_asm_api_plugin__admin_menu_created', $this->menu_page_hook );
	}

	/**
	 * Handlers for menu item loading events.
	 *
	 * @return void
	 */
	private function bootstrap_page_load(): void {
		add_action( "load-{$this->menu_page_hook}", [ $this, 'config_view' ], 10 );
	}

	/**
	 * How table will look and feel.
	 *
	 * @return void
	 */
	public function config_view(): void {

		$screen = get_current_screen();

		if ( ! is_object( $screen ) || $screen->id !== $this->menu_page_hook ) {
			return;
		}

		$args = [
			'label'   => __( 'Number of items per page', 'david-ev-asm-api-plugin' ),
			'default' => 20,
			'option'  => 'elements_per_page',
		];
		add_screen_option( 'per_page', $args );

		$this->view = new David_Ev_Asm_View_Cache();
	}

	/**
	 * Trigger render content.
	 *
	 * @return void
	 */
	public function show(): void {
		$this->view->render_page();
	}
}
