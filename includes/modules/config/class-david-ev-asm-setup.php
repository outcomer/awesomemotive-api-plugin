<?php
/**
 * David_Ev_Asm_Setup
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Config;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * All plugin settings are here.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Setup {

	/**
	 * Single instance of the class.
	 *
	 * @var David_Ev_Asm_Setup
	 */
	private static ?David_Ev_Asm_Setup $instance = null;

	/**
	 * David_Ev_Asm_Setup Constructor.
	 */
	private function __construct() {
		$this->init_hooks();
	}

	/**
	 * David_Ev_Asm_Setup Instance.
	 * Ensures only one instance of David_Ev_Asm_Setup is loaded or can be loaded.
	 *
	 * @return David_Ev_Asm_Setup Instance.
	 */
	public static function instance(): David_Ev_Asm_Setup {

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
	private function init_hooks(): void {
		add_filter( 'body_class', [ $this, 'body_classes' ], 10, 2 );
		add_filter( 'admin_body_class', [ $this, 'admin_body_classes' ], 20 );
	}


	/**
	 * Add custom classes into body tag for any front page.
	 *
	 * @param array $classes An array of body class names.
	 * @param array $class   An array of additional class names added to the body.
	 *
	 * @return array
	 */
	public function body_classes( array $classes, array $class ): array {
		$classes[] = DAVID_E_ASM_NAMESPACE_FRONT;

		return $classes;
	}

	/**
	 * Add custom classes to body in admin.
	 *
	 * @param string $classes The name of current screen.
	 *
	 * @return string
	 */
	public function admin_body_classes( string $classes ): string {
		$classes = "{$classes} " . DAVID_E_ASM_NAMESPACE_ADMIN;

		return $classes;
	}
}
