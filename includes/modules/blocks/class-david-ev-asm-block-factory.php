<?php
/**
 * David_Ev_Asm_Block_Factory
 *
 * @package DavidEvAsmApiPlugin\Gutenberg
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Blocks;

use Exception;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Entry point for all app blocks.
 *
 * @package DavidEvAsmApiPlugin\Gutenberg
 */
class David_Ev_Asm_Block_Factory {

	/**
	 * The single instance of the class.
	 *
	 * @var David_Ev_Asm_Block_Factory
	 */
	private static ?David_Ev_Asm_Block_Factory $instance = null;

	/**
	 * David_Ev_Asm_Block_Factory Constructor.
	 *
	 * @return void
	 */
	private function __construct() {
		add_action( 'init', [ $this, 'register_blocks' ] );
		add_action( 'block_categories_all', [ $this, 'register_blocks_category' ], 10, 2 );
	}

	/**
	 * David_Ev_Asm_Block_Factory Instance.
	 * Ensures only one instance of David_Ev_Asm_Block_Factory is loaded or can be loaded.
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
	 * Register all app blocks in WP.
	 *
	 * @throws Exception On unexpected 'i_am' class value.
	 *
	 * @return void
	 */
	public function register_blocks(): void {

		$blocks = glob( DAVID_E_ASM_CORE_ABSPATH . '/modules/blocks/types/class-' . DAVID_E_ASM_ASSET_NAME_PREFIX . 'block-*.php' );

		foreach ( $blocks as $block_file ) {

			$src = file_get_contents( $block_file ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			preg_match( '/^namespace\s+(.+?);$/ms', $src, $namespace );
			preg_match( '/class\s+(\w+)(.*)?\{/', $src, $classname );

			$full_class = $namespace[1] . '\\' . $classname[1];
			new $full_class();
		}
	}

	/**
	 * Register app block category.
	 *
	 * @param array $categories Array of block categories.
	 * @param mixed $context    Post being loaded.
	 *
	 * @return array
	 */
	public function register_blocks_category( array $categories, mixed $context ): array {

		return array_merge(
			[
				[
					'slug'  => 'david-ev-asm-plugin-blocks',
					'title' => __( 'David Ev ASM Plugin blocks', 'david-ev-asm-api-plugin' ),
				],
			],
			$categories
		);
	}
}
