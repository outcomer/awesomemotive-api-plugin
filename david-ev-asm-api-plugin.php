<?php
/**
 * Plugin Name: David Ev Challenge: API Based Plugin
 * Plugin URI: https://github.com/outcomer/awesomemotive-api-plugin
 * Description: An eCommerce toolkit that helps you sell anything. Beautifully.
 * Version: 1.0.0
 * Author: David Evdoshchenko
 * Author URI: https://github.com/outcomer
 * Text Domain: david-ev-asm-api-plugin
 * Domain Path: /includes/i18n/
 * Requires at least: 6.1
 * Requires PHP: 8.1
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

use DavidEv\Asm\ApiPlugin\Includes\{
	David_Ev_Asm_Requirements,
	David_Ev_Asm_Core,
};

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'DAVID_E_ASM_API_PLUGIN_FILE' ) ) {
	define( 'DAVID_E_ASM_API_PLUGIN_FILE', __FILE__ );

	if ( ! defined( 'DAVID_E_ASM_PLUGIN_DIR' ) ) {
		define( 'DAVID_E_ASM_PLUGIN_DIR', plugin_dir_path( DAVID_E_ASM_API_PLUGIN_FILE ) );
	}
}

// Check requirements.
if ( ! class_exists( 'David_Ev_Asm_Requirements' ) ) {
	require_once dirname( __FILE__ ) . '/includes/class-david-ev-asm-requirements.php';
	David_Ev_Asm_Requirements::instance();
}


// Include the main David_Ev_Asm_Core class.
if ( ! class_exists( 'David_Ev_Asm_Core' ) ) {
	require_once dirname( __FILE__ ) . '/includes/class-david-ev-asm-core.php';
}

/**
 * Returns the main instance of David_Ev_Asm_Core.
 *
 * @return David_Ev_Asm_Core
 */
function david_ev_asm_api_plugin(): David_Ev_Asm_Core {
	return David_Ev_Asm_Core::instance();
}

david_ev_asm_api_plugin();
