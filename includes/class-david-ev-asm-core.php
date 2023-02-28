<?php
/**
 * David_Ev_Asm_Core
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use DavidEv\Asm\ApiPlugin\Includes\David_Ev_Asm_Modules;

use WP_CLI;

require_once dirname( __FILE__ ) . '/class-david-ev-asm-modules.php';

/**
 * Main plugin class - entry point.
 *
 * @package DavidEvAsmApiPlugin
 */
final class David_Ev_Asm_Core extends David_Ev_Asm_Modules {

	/**
	 * The single instance of the class.
	 *
	 * @var David_Ev_Asm_Core
	 */
	private static ?David_Ev_Asm_Core $instance = null;

	/**
	 * David_Ev_Asm_Core Constructor.
	 *
	 * @return void
	 */
	private function init(): void {
		$this->set_config();
		$this->includes();

		add_action( 'plugins_loaded', [ $this, 'instantiate' ] );
	}

	/**
	 * Main David_Ev_Asm_Core Instance.
	 * Ensures only one instance of David_Ev_Asm_Core is loaded or can be loaded.
	 *
	 * @return self Main instance.
	 */
	public static function instance(): self {

		if ( is_null( self::$instance ) ) {

			self::$instance = new self();
			self::$instance->init();
		}

		return self::$instance;
	}

	/**
	 * Define David_Ev_Asm_Core main configuration.
	 *
	 * @return void
	 */
	private function set_config(): void {

		$min = '.min';

		if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
			$min = null;
		}

		if ( ! function_exists( 'get_plugin_data' ) ) {
			include_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		// This can be moved into config logic.
		define( 'DAVID_E_ASM_FILE_MIN_SUFFIX', $min );
		define( 'DAVID_E_ASM_CODEPATH_PREFIX', 'includes' );
		define( 'DAVID_E_ASM_CLASS_BASE_NAMESPACE', 'DavidEv\Asm\ApiPlugin' );
		define( 'DAVID_E_ASM_CLASS_NAME_PREFIX', 'David_Ev_Asm_' );
		define( 'DAVID_E_ASM_ASSET_NAME_PREFIX', str_replace( '_', '-', strtolower( DAVID_E_ASM_CLASS_NAME_PREFIX ) ) );
		define( 'DAVID_E_ASM_CORE_ABSPATH', DAVID_E_ASM_PLUGIN_DIR . DAVID_E_ASM_CODEPATH_PREFIX ); // e.g.: /wp-content/plugins/plugin_folder/includes.
		define( 'DAVID_E_ASM_PLUGIN_VERSION', get_plugin_data( DAVID_E_ASM_API_PLUGIN_FILE )['Version'] );
		define( 'DAVID_E_ASM_PLUGIN_URL', plugin_dir_url( DAVID_E_ASM_API_PLUGIN_FILE ) );
		define( 'DAVID_E_ASM_NAMESPACE_FRONT', 'david-ev-asm-api-plugin-front' );
		define( 'DAVID_E_ASM_NAMESPACE_ADMIN', 'david-ev-asm-api-plugin-admin' );
	}

	/**
	 * Include required core files used in admin and on the frontend.
	 *
	 * @return void
	 */
	private function includes(): void {
		include_once DAVID_E_ASM_PLUGIN_DIR . 'includes/class-david-ev-asm-autoloader.php';
	}

	/**
	 * Instantiate plugin modules.
	 *
	 * @return void
	 */
	public function instantiate(): void {

		$heartbeat = ( isset( $_POST['action'] ) && 'heartbeat' === $_POST['action'] && wp_verify_nonce( $_POST['_nonce'], 'heartbeat-nonce' ) ) ? true : false;

		if ( $heartbeat ) {
			return;
		}

		// MODULES ORDER MATTER!!!
		$this->set_module_autoloader();
		$this->set_module_requirements();
		$this->set_module_assets();
		$this->set_module_blocks();
		$this->set_module_setup();

		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			require_once DAVID_E_ASM_CORE_ABSPATH . '/class-david-ev-asm-cli.php';
			WP_CLI::add_command( 'david_ev_asm_org_cache', new \DavidEv\Asm\ApiPlugin\Includes\David_Ev_Asm_Cli() );
		}

		/**
		 * Fire once core instantiated.
		 *
		 * @hook david_ev_asm_api_plugin__include_path
		 */
		do_action( 'david_ev_asm_api_plugin__setup_init' );
	}
}
