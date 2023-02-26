<?php
/**
 * Block Abstract
 *
 * @package DavidEvAsmApiPlugin\Gutenberg\Blocks
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * David_Ev_Asm_Block_Abstract class.
 * Prototype of any block.
 *
 * @package DavidEvAsmApiPlugin\Gutenberg\Blocks
 */
abstract class David_Ev_Asm_Block_Abstract {

	/**
	 * All Bbocks namespace.
	 *
	 * @var string
	 */
	const BLOCKS_NAMESPACE = 'david-ev-asm';

	/**
	 * Block scripts and style config.
	 *
	 * @var array
	 */
	protected array $block_assets;

	/**
	 * Current block.
	 *
	 * @var string
	 */
	protected string $block_name;

	/**
	 * If we are in block preview mode in admin or customizer.
	 *
	 * @var bool
	 */
	protected bool $preview_mode = false;

	/**
	 * In what sidebar id preview mode triggered.
	 *
	 * @var string
	 */
	protected ?string $preview_area_id = null;

	/**
	 * Force child to have method for render block itself.
	 *
	 * @param array  $attributes Current block attributes.
	 * @param string $content    Block content (always null for dynamic blocks).
	 *
	 * @return string
	 */
	abstract public function render( array $attributes, ?string $content = null ): ?string;

	/**
	 * Force child to have method for getting block attributes.
	 *
	 * @return array
	 */
	abstract protected function get_attributes(): array;

	/**
	 * Register block in WP.
	 *
	 * @return self
	 */
	protected function register_block_type(): self {

		$assets = [];
		$prefix = DAVID_E_ASM_ASSET_NAME_PREFIX;

		$handler        = "{$prefix}{$this->block_name}";
		$handler_editor = "{$prefix}{$this->block_name}-editor";

		if ( true === $this->block_assets['style']['enqueue'] ) {
			$assets['style'] = $handler;
		}

		if ( true === $this->block_assets['script']['enqueue'] ) {
			$assets['script'] = $handler;
		}

		if ( true === $this->block_assets['editor_script']['enqueue'] ) {
			$assets['editor_script'] = $handler_editor;
		}

		if ( true === $this->block_assets['editor_style']['enqueue'] ) {
			$assets['editor_style'] = $handler_editor;
		}

		register_block_type(
			self::BLOCKS_NAMESPACE . '/' . $this->block_name,
			array_merge(
				[
					'render_callback' => [ $this, 'render' ],
					'attributes'      => $this->get_attributes(),
				],
				$assets
			)
		);

		return $this;
	}

	/**
	 * Register block styles and script.
	 *
	 * @return self
	 */
	protected function register_block_assets(): self {

		add_action( 'enqueue_block_assets', [ $this, 'register_block_assets_front' ], 10 );
		add_action( 'enqueue_block_editor_assets', [ $this, 'register_block_assets_admin' ], 10 );

		return $this;
	}

	/**
	 * [register_block_assets_front description]
	 *
	 * @return  void    [return description]
	 */
	public function register_block_assets_front(): void {

		$min    = DAVID_E_ASM_FILE_MIN_SUFFIX;
		$prefix = DAVID_E_ASM_ASSET_NAME_PREFIX;

		$file_name = $this->block_name;
		$handler   = "{$prefix}{$file_name}";

		if ( true === $this->block_assets['style']['enqueue'] ) {
			wp_register_style(
				$handler,
				DAVID_E_ASM_PLUGIN_URL . "assets/dist/styles/blocks/{$file_name}{$min}.css",
				$this->block_assets['style']['deps'],
				DAVID_E_ASM_PLUGIN_VERSION,
				'all'
			);
		}

		if ( true === $this->block_assets['script']['enqueue'] ) {
			wp_register_script(
				$handler,
				DAVID_E_ASM_PLUGIN_URL . "assets/dist/scripts/blocks/{$file_name}{$min}.js",
				$this->block_assets['script']['deps'],
				DAVID_E_ASM_PLUGIN_VERSION,
				true
			);
		}
	}

	/**
	 * [register_block_assets_admin description]
	 *
	 * @return  void    [return description]
	 */
	public function register_block_assets_admin(): void {

		$min    = DAVID_E_ASM_FILE_MIN_SUFFIX;
		$prefix = DAVID_E_ASM_ASSET_NAME_PREFIX;

		$file_name      = "{$this->block_name}-editor";
		$handler_editor = "{$prefix}{$file_name}";

		if ( true === $this->block_assets['style']['enqueue'] ) {
			wp_register_style(
				$handler_editor,
				DAVID_E_ASM_PLUGIN_URL . "assets/dist/styles/blocks/{$file_name}{$min}.css",
				$this->block_assets['editor_style']['deps'],
				DAVID_E_ASM_PLUGIN_VERSION,
				'all'
			);
		}

		if ( true === $this->block_assets['script']['enqueue'] ) {
			wp_register_script(
				$handler_editor,
				DAVID_E_ASM_PLUGIN_URL . "assets/dist/scripts/blocks/{$file_name}{$min}.js",
				$this->block_assets['editor_script']['deps'],
				DAVID_E_ASM_PLUGIN_VERSION,
				true
			);
		}
	}

	/**
	 * Create block name based on class name.
	 *
	 * @param string $class Short class name.
	 *
	 * @return self
	 */
	protected function set_block_name_from_class( string $class ): self {
		$this->block_name = strtolower( str_replace( [ DAVID_E_ASM_CLASS_NAME_PREFIX, '_' ], [ '', '-' ], $class ) );

		return $this;
	}
}
