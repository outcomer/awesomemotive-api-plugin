<?php
/**
 * David_Ev_Asm_Assets
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Config;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class to register all plugin styles and scripts.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Assets {

	/**
	 * Class entry point where required actions fired.
	 *
	 * @return string
	 */
	public static function init(): string {
		add_action( 'wp_enqueue_scripts', [ __CLASS__, 'register_assets' ], 10 );
		add_action( 'admin_enqueue_scripts', [ __CLASS__, 'register_assets' ], 10 );
		add_action( 'wp_enqueue_scripts', [ __CLASS__, 'constants_front' ], 20 );
		add_action( 'admin_enqueue_scripts', [ __CLASS__, 'constants_admin' ], 20 );

		return __CLASS__;
	}

	/**
	 * Register all scripts and styles except externas for using in backend.
	 *
	 * @param string $hook_suffix The current admin page.
	 *
	 * @return void
	 */
	public static function register_assets( ?string $hook_suffix ): void {

		$prefix = DAVID_E_ASM_ASSET_NAME_PREFIX;

		$data = [
			'styles'  => [
				[
					'handle' => "{$prefix}frontend",
					'src'    => 'assets/dist/styles/frontend.css',
					'deps'   => [],
				],
				[
					'handle' => "{$prefix}backend",
					'src'    => 'assets/dist/styles/backend.css',
					'deps'   => [],
				],
			],
			'scripts' => [
				[
					'handle'    => "{$prefix}frontend",
					'src'       => 'assets/dist/scripts/frontend.js',
					'deps'      => [ 'jquery' ],
					'in_footer' => true,
				],
				[
					'handle'    => "{$prefix}backend",
					'src'       => 'assets/dist/scripts/backend.js',
					'deps'      => [],
					'in_footer' => true,
				],
			],
		];

		self::do_register_assets( $data );
	}

	/**
	 * Callback for WP wp_enqueue_scripts action.
	 * Output all frontend variables.
	 *
	 * @return void
	 */
	public static function constants_front(): void {

		$prefix = DAVID_E_ASM_ASSET_NAME_PREFIX;

		$object_data = [
			'ajaxUrl'         => admin_url( 'admin-ajax.php', 'relative' ),
			'davidEvAsmNonce' => wp_create_nonce( 'asm_plugin_ajax' ),
			'scriptDebug'     => SCRIPT_DEBUG,
			'pluginNonce'     => wp_create_nonce( 'frontendAjax' ),
			'cssNamespaces'   => [
				'admin' => DAVID_E_ASM_NAMESPACE_ADMIN,
				'front' => DAVID_E_ASM_NAMESPACE_FRONT,
			],
		];

		ob_start();
		?>
			var DavidEvAsmApiPlugin = DavidEvAsmApiPlugin || {}
			DavidEvAsmApiPlugin.constants = <?php echo wp_json_encode( $object_data ); ?>
		<?php

		wp_add_inline_script( "{$prefix}frontend", strip_tags( ob_get_clean() ), 'before' ); // phpcs:ignore WordPress.WP.AlternativeFunctions.strip_tags_strip_tags
	}

	/**
	 * Callback for WP admin_enqueue_scripts action.
	 * Output all backend variables.
	 *
	 * @return void
	 */
	public static function constants_admin(): void {

		$prefix = DAVID_E_ASM_ASSET_NAME_PREFIX;

		$object_data = [
			'ajaxUrl'         => admin_url( 'admin-ajax.php', 'relative' ),
			'davidEvAsmNonce' => wp_create_nonce( 'asm_plugin_ajax' ),
			'scriptDebug'     => SCRIPT_DEBUG,
			'pluginNonce'     => wp_create_nonce( 'frontendAjax' ),
			'cssNamespaces'   => [
				'admin' => DAVID_E_ASM_NAMESPACE_ADMIN,
				'front' => DAVID_E_ASM_NAMESPACE_FRONT,
			],
		];

		ob_start();
		?>
			var DavidEvAsmApiPlugin = DavidEvAsmApiPlugin || {}
			DavidEvAsmApiPlugin.constants = <?php echo wp_json_encode( $object_data ); ?>
		<?php

		wp_add_inline_script( "{$prefix}backend", strip_tags( ob_get_clean() ), 'before' ); // phpcs:ignore WordPress.WP.AlternativeFunctions.strip_tags_strip_tags
	}

	/**
	 * Register scripts and styles in WP to make it available for enqueuing.
	 *
	 * @param array $data For Scripts.
	 *                    - handle    Defalt false                       - sript registration name.
	 *                    - src       Defalt false                       - path to file relative to app 'includes' folder.
	 *                    - deps      Default []                         - dependencies array.
	 *                    - ver       Default DAVID_E_ASM_PLUGIN_VERSION - script version.
	 *                    - in_footer Default false                      - Pint script into <head> or <body>.
	 *                    For styles.
	 *                    - handle    Defalt false                       - sript registration name.
	 *                    - src       Defalt false                       - path to file relative to app 'includes' folder.
	 *                    - deps      Default []                         - dependencies array.
	 *                    - ver       Default DAVID_E_ASM_PLUGIN_VERSION - script version.
	 *                    - media     Default 'all'                      - The media for which this stylesheet has been defined.
	 *
	 * @return void
	 */
	public static function do_register_assets( array $data ): void {

		if ( isset( $data['scripts'] ) ) {

			foreach ( $data['scripts'] as $script ) {

				$script_args = wp_parse_args(
					$script,
					[
						'handle'    => false,
						'src'       => false,
						'deps'      => [],
						'ver'       => DAVID_E_ASM_PLUGIN_VERSION,
						'in_footer' => false,
					]
				);

				self::resolve_assets_path( $script_args );
				wp_register_script( $script_args['handle'], $script_args['src'], $script_args['deps'], $script_args['ver'], $script_args['in_footer'] );
			}
		}

		if ( isset( $data['styles'] ) ) {

			foreach ( $data['styles'] as $style ) {

				$style_args = wp_parse_args(
					$style,
					[
						'handle' => false,
						'src'    => false,
						'deps'   => [],
						'ver'    => DAVID_E_ASM_PLUGIN_VERSION,
						'media'  => 'all',
					]
				);

				self::resolve_assets_path( $style_args );
				wp_register_style( $style_args['handle'], $style_args['src'], $style_args['deps'], $style_args['ver'], $style_args['media'] );
			}
		}
	}

	/**
	 * Resolve asset path to asset URL.
	 *
	 * @param array $asset Asset unit data.
	 *
	 * @return void
	 */
	private static function resolve_assets_path( array &$asset ): void {

		$min = DAVID_E_ASM_FILE_MIN_SUFFIX;

		$actual_url = DAVID_E_ASM_PLUGIN_URL . $asset['src'];

		$path       = dirname( $actual_url );
		$src_name   = basename( $actual_url );
		$path_parts = pathinfo( $src_name );
		$min_name   = "{$path_parts['filename']}{$min}.{$path_parts['extension']}";

		$asset['src'] = "{$path}/{$min_name}";
	}
}
