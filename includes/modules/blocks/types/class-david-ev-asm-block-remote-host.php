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

use DavidEv\Asm\ApiPlugin\Includes\{
	Modules\Blocks\David_Ev_Asm_Block_Abstract,
	Storage\David_Ev_Asm_Org_Repository as Org_Repository,
};
use ReflectionClass;
use WP_REST_Request;
use Throwable;

/**
 * David_Ev_Asm_Block_Remote_Host class.
 *
 * @package DavidEvAsmApiPlugin\Gutenberg\Blocks
 */
class David_Ev_Asm_Block_Remote_Host extends David_Ev_Asm_Block_Abstract {

	/**
	 * Data provider.
	 *
	 * @var Org_Repository
	 */
	private Org_Repository $org_repository;

	/**
	 * David_Ev_Asm_Block_Remote_Host Constructor
	 *
	 * @return void
	 */
	public function __construct() {

		$prefix = DAVID_E_ASM_ASSET_NAME_PREFIX;
		$class  = new ReflectionClass( $this );

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

		$this->org_repository = new Org_Repository();

		$this
			->set_block_name_from_class( $class->getShortName() )
			->register_block_type()
			->register_block_assets()
			->hooks();
	}

	/**
	 * Actions callbacks for access
	 * block content from admin and front
	 *
	 * @return void
	 */
	protected function hooks(): void {
		$action = $this->get_blockname_full();

		add_action( 'rest_api_init', [ $this, 'rest' ] );
		add_action( "wp_ajax_{$action}", [ $this, 'ajax' ], 10 );
		add_action( "wp_ajax_nopriv_{$action}", [ $this, 'ajax' ], 10 );
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
	 * Works in wp-admin only.
	 *
	 * @return void
	 */
	public function rest(): void {

		$prefix = self::BLOCKS_NAMESPACE;

		register_rest_route(
			"{$prefix}/v1",
			"/{$this->block_name}",
			[
				'methods'             => 'GET',
				'permission_callback' => function ( WP_REST_Request $request ): bool {
					return current_user_can( 'edit_others_posts' );
				},
				'callback'            => function ( WP_REST_Request $request ): array {
					return $this->respond_content_request();
				},
			]
		);
	}

	/**
	 * Route for block content.
	 * Works in wp-admin & front.
	 *
	 * @return void
	 */
	public function ajax(): void {
		check_ajax_referer( 'frontendAjax', 'nonce' );
		wp_send_json_success( $this->respond_content_request() );
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
	public function render( array $attributes, ?string $content = null ): ?string {
		ob_start();
		?>
		<div
			class="david-ev-asm-block"
			data-name="<?php echo esc_html( $this->get_blockname_full() ); ?>"
			data-atts="<?php echo esc_html( wp_json_encode( $attributes ) ); ?>"
		>
			<div class="block-loader"><div class="loading"><i></i><i></i><i></i><i></i></div></div>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Prepare content request structure.
	 *
	 * @return array
	 */
	private function respond_content_request(): array {
		try {
			$code        = 200;
			$remote_data = $this->org_repository->persons_get();
		} catch ( Throwable $e ) {
			$msg = [
				$e->getMessage(),
				$e->getFile() . ':' . $e->getLine(),
			];

			$code        = 400;
			$remote_data = implode( ', ', $msg );
		}

		return [
			'code'    => $code,
			'content' => $remote_data,
		];
	}
}
