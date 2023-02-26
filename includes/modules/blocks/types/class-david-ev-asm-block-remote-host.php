<?php
/**
 * Block Types Editor
 *
 * @package DavidEvAsmApiPlugin\Gutenberg\Blocks
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Blocks\Types;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use DavidEv\Asm\ApiPlugin\Includes\Modules\Blocks\David_Ev_Asm_Block_Abstract;
use ReflectionClass;
use WP_REST_Request;

/**
 * David_Ev_Asm_Block_Remote_Host class.
 *
 * @package DavidEvAsmApiPlugin\Gutenberg\Blocks
 */
class David_Ev_Asm_Block_Remote_Host extends David_Ev_Asm_Block_Abstract {

	/**
	 * David_Ev_Asm_Block_Remote_Host Constructor
	 *
	 * @return void
	 */
	public function __construct() {

		add_action( 'rest_api_init', [ $this, 'rest' ] );

		$prefix = DAVID_E_ASM_ASSET_NAME_PREFIX;

		$this->block_assets = [
			'editor_script' => [
				'enqueue' => true,
				'deps'    => [ "{$prefix}backend", 'wp-blocks', 'wp-element', 'wp-components', 'wp-i18n', 'wp-data' ],
			],
			'editor_style'  => [
				'enqueue' => true,
				'deps'    => [ "{$prefix}backend" ],
			],
			'style'         => [
				'enqueue' => true,
				'deps'    => [ "{$prefix}frontend" ],
			],
			'script'        => [
				'enqueue' => true,
				'deps'    => [ "{$prefix}frontend" ],
			],
		];

		$class_name = ( new ReflectionClass( $this ) )->getShortName();

		$this
			->set_block_name_from_class( $class_name )
			->register_block_type()
			->register_block_assets();
	}

	/**
	 * Get block attributes.
	 *
	 * @return array
	 */
	protected function get_attributes(): array {
		return [
			'isExample'  => [
				'type'    => 'boolean',
				'default' => false,
			],
			'blockTitle' => [
				'type'    => 'string',
				'default' => '',
			],
		];
	}

	/**
	 * Route for block content.
	 *
	 * @return void
	 */
	public function rest(): void {

		$prefix = self::BLOCKS_NAMESPACE;

		register_rest_route(
			"{$prefix}/v1",
			"/{$this->block_name}",
			[
				'methods'             => 'POST',
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_others_posts' );
				},
				'callback'            => function ( WP_REST_Request $request ) {

					$return = [
						'content' => wp_json_encode( [ '"aqweqweqw": "hjkhjklhjkh"' ] ),
					];

					return $return;
				},
			]
		);
	}

	/**
	 * Render the Categories links block.
	 * It is top level category term and their direct children.
	 *
	 * @param array  $attributes Current attributes.
	 * @param string $content    Block content (always null due to block is dynamic).
	 *
	 * @return string
	 */
	public function render( array $attributes, ?string $content = null ): string {
		return 'RENDER';
		return $this->output( $attributes, $render, $this->refer_widget );
	}
}
