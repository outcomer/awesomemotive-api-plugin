<?php
/**
 * David_Ev_Asm_Menu_Item
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Admin;

use DavidEv\Asm\ApiPlugin\Includes\Modules\Admin\View\David_Ev_Asm_View_Persons;
use DavidEv\Asm\ApiPlugin\Includes\Storage\David_Ev_Asm_Org_Repository as Org_Repository;
use DavidEv\Asm\ApiPlugin\Includes\Storage\David_Ev_Asm_Org_Db_Cache as Org_Db_Cache;
use DavidEv\Asm\ApiPlugin\Includes\Modules\Admin\Interfaces\David_Ev_Asm_Menu_Item_Interface as Menu_Item_Interface;
use Throwable;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * All plugin settings are here.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Menu_Persons implements Menu_Item_Interface {

	const PAGE_SLUG = DAVID_E_ASM_ASSET_NAME_PREFIX . 'admin-page';

	/**
	 * Resolved menu page slug.
	 *
	 * @var string
	 */
	private string $menu_page_hook;

	/**
	 * Content for View.
	 *
	 * @var object
	 */
	private object $persons;

	/**
	 * View instance.
	 *
	 * @var David_Ev_Asm_View_Persons
	 */
	private David_Ev_Asm_View_Persons $view;

	/**
	 * David_Ev_Asm_Menu_Item Constructor.
	 *
	 * @param string $menu_page_hook Page name registered within WP.
	 *
	 * @return void
	 */
	public function init( string $menu_page_hook ): void {
		$this->menu_page_hook = $menu_page_hook;

		$this->set_data();
		$this->bootstrap_page_load();
	}

	/**
	 * Trigger render content.
	 *
	 * @return void
	 */
	public function display(): void {
		if ( get_current_screen()->id !== $this->menu_page_hook ) {
			return;
		}

		if ( $this->persons instanceof Throwable ) {
			$this->view->render_header();
			$this->view->render_exception( e: $this->persons );
		} else {
			$this->view->render_page();
		}
	}

	/**
	 * Instantiate $this->persons with data.
	 *
	 * @return void
	 */
	private function set_data(): void {
		$prefix = DAVID_E_ASM_ASSET_NAME_PREFIX;
		$update = $_POST[ "{$prefix}cache-update" ] ?? false;

		$args = [ 'no-cache' => false ];

		if ( 'Update' === $update ) {
			check_admin_referer( "bulk-{$this->menu_page_hook}", '_wpnonce' );
			$args['no-cache'] = true;
		}

		try {
			$this->persons = ( new Org_Repository() )->persons_get( args: $args );
		} catch ( Throwable $e ) {
			$this->persons = $e;
		}
	}

	/**
	 * Handlers for menu item loading events.
	 *
	 * @return void
	 */
	private function bootstrap_page_load(): void {
		add_action( "load-{$this->menu_page_hook}", [ $this, 'configure_view' ], 10 );
	}

	/**
	 * How table will look and feel.
	 *
	 * @return void
	 */
	public function configure_view(): void {

		$screen = get_current_screen();

		if ( ! is_object( $screen ) || $screen->id !== $this->menu_page_hook ) {
			return;
		}

		add_screen_option(
			'per_page',
			[
				'label' => __( 'Number of items per page', 'david-ev-asm-api-plugin' ),
			]
		);

		$this->view = new David_Ev_Asm_View_Persons(
			[
				'cache_ttl' => Org_Db_Cache::TTL_PERSONS / HOUR_IN_SECONDS,
				'persons'   => $this->persons,
			]
		);
	}
}
