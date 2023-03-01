<?php
/**
 * David_Ev_Asm_Menu_Item
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Admin\View;

use Throwable;

use DavidEv\Asm\ApiPlugin\Includes\Storage\David_Ev_Asm_Org_Db_Cache;
use WP_List_Table;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * All plugin settings are here.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_View_Cache extends WP_List_Table {

	/**
	 * Organization cache instance.
	 *
	 * @var David_Ev_Asm_Org_Db_Cache
	 */
	private David_Ev_Asm_Org_Db_Cache $org_cache;

	/**
	 * David_Ev_Asm_Menu_Item Constructor.
	 */
	public function __construct() {
		parent::__construct();

		$this->org_cache = new David_Ev_Asm_Org_Db_Cache();
	}

	/**
	 * Page render handler.
	 *
	 * @return void
	 */
	public function render_page(): void {
		try {
			$this->prepare_items();
			$this->render_header();
			$this->render_content();
		} catch ( Throwable $e ) {
			$this->render_exception( $e );
		}
	}

	/**
	 * Output general infromation.
	 *
	 * @return void
	 */
	private function render_header(): void {
		$ttl = David_Ev_Asm_Org_Db_Cache::TTL_PERSONS / HOUR_IN_SECONDS;
		?>
		<h1><?php esc_html_e( 'The cache of Persons in organization.', 'david-ev-asm-api-plugin' ); ?></h1>
		<p>
			<?php
			echo esc_html(
				sprintf(
					// translators: %1$s - number, %1$s - msg if cache exist, %1$s - msg on cache state.
					__( 'The content of the cache is updated once per %2$s hour(s).  %1$s', 'david-ev-asm-api-plugin' ),
					( is_null( $this->org_cache->persons_get() ) )
						? __( 'You may force update from the page.', 'david-ev-asm-api-plugin' )
						: __( 'Right now cache is empty.', 'david-ev-asm-api-plugin' ),
					$ttl
				)
			);
			?>
		</p>
		<?php
	}

	/**
	 * Output main infromation.
	 *
	 * @return void
	 */
	private function render_content(): void {
		?>
		<div class="wrap">
			<form method="post">
				<?php $this->display(); ?>
			</form>
		</div>
		<?php
	}

	/**
	 * Output main infromation.
	 *
	 * @param Throwable $e Exception instance.
	 *
	 * @return void
	 */
	private function render_exception( Throwable $e ): void {
		?>
		<div class="wrap">
			<?php // translators: %1$s - error text, %2$s - error file, %3$s - error string in file. ?>
			<?php echo esc_html( sprintf( __( 'Error render data:  %1$s, %2$s:%3$s.', 'david-ev-asm-api-plugin' ), $e->getMessage(), $e->getFile(), $e->getLine() ) ); ?>
		</div>
		<?php
	}

	/**
	 * Prepares the list of items for displaying.
	 *
	 * @return void
	 */
	public function prepare_items(): void {

		$this->set_pagination_args(
			[
				'total_items' => 3,
				'per_page'    => 20,
			]
		);

		$this->items = $this->org_cache->persons_get()?->data->rows ?? [];
	}

	/**
	 * Macth values and column.
	 *
	 * @param object|array $item        Row array.
	 * @param string       $column_name Current cell.
	 *
	 * @return mixed
	 */
	public function column_default( $item, $column_name ): mixed { // phpcs:ignore Squiz.Commenting.FunctionComment.ScalarTypeHintMissing
		switch ( $column_name ) {
			case 'date':
				$value = wp_date( 'c', $item->{$column_name} );
				break;

			default:
				$value = $item->{$column_name} ?? null;
				break;
		}
		return $value;
	}

	/**
	 * Column value provider.
	 *
	 * @return array
	 */
	public function get_columns(): array {

		$cache  = $this->org_cache->persons_get();
		$keys   = array_keys( (array) ( $cache->data->rows->{1} ?? [] ) );
		$values = $cache->data->headers ?? [];

		return array_merge(
			[ 'cb' => '<input type="checkbox" />' ],
			array_combine( $keys, $values )
		);
	}

	/**
	 * Bulk actions markup.
	 *
	 * @param object|array $item Row array.
	 *
	 * @return string
	 */
	public function column_cb( $item ): string {
		return sprintf( '<input type="checkbox" name="element[]" value="%s" />', $item->id );
	}

	/**
	 * Validates user permissions while
	 * doing wp_ajax_fetch_list()
	 *
	 * @return bool
	 */
	public function ajax_user_can(): bool {
		return current_user_can( 'manage_options' );
	}
}
