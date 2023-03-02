<?php
/**
 * David_Ev_Asm_Menu_Item
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Modules\Admin\View;

use WP_List_Table;
use Throwable;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * All plugin settings are here.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_View_Persons extends WP_List_Table {

	/**
	 * The content to be displayed
	 *
	 * @var array
	 */
	private $view_args;

	/**
	 * David_Ev_Asm_Menu_Item Constructor.
	 *
	 * @param array $view_args The content to be displayed.
	 */
	public function __construct( array $view_args ) {
		$this->view_args = $view_args;
		parent::__construct();

		add_filter( 'set_screen_option_' . $this->get_per_page_option_name(), [ $this, 'set_items_per_page_option' ], 10, 3 );
		set_screen_options();
	}

	/**
	 * Set items_per_page option for current screen.
	 *
	 * @param mixed  $status Default false (to skip saving the current option).
	 * @param string $option Screen option name.
	 * @param int    $value  Screen option value.
	 *
	 * @return int
	 */
	public function set_items_per_page_option( mixed $status, string $option, int $value ): int {
		return (int) $value;
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
		?>
		<h1><?php esc_html_e( 'The cache of Persons in organization.', 'david-ev-asm-api-plugin' ); ?></h1>
		<p>
			<?php
			echo esc_html(
				sprintf(
					// translators: %1$s - number, %1$s - msg if cache exist, %1$s - msg on cache state.
					__( 'The content of the cache is updated once per %1$s hour(s). You may force update from the page.', 'david-ev-asm-api-plugin' ),
					$this->view_args['cache_ttl']
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

		$prefix = DAVID_E_ASM_ASSET_NAME_PREFIX;
		?>
		<div class="wrap">
			<form method="post">
				<?php submit_button( __( 'Update', 'david-ev-asm-api-plugin' ), "primary {$prefix}cache-update", "{$prefix}cache-update", false ); ?>
				<?php $this->display(); ?>
				<?php submit_button( __( 'Update', 'david-ev-asm-api-plugin' ), "primary {$prefix}cache-update", "{$prefix}cache-update", false ); ?>
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

		$items    = $this->view_args['persons'];
		$columns  = $this->get_columns();
		$hidden   = $this->get_hidden_columns();
		$sortable = $this->get_sortable_columns();

		$data = $items->data->rows ?? [];

		$per_page     = $this->get_items_per_page( $this->get_per_page_option_name(), 10 );
		$current_page = $this->get_pagenum();
		$total_items  = count( (array) $data );

		$this->set_pagination_args(
			[
				'total_items' => $total_items,
				'per_page'    => $per_page,
			]
		);

		$data = array_slice( (array) $data, ( ( $current_page - 1 ) * $per_page ), $per_page );

		$this->_column_headers = [ $columns, $hidden, $sortable ];
		$this->items           = $data;
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
				$value = wp_date( get_option( 'date_format' ), $item->{$column_name} );
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

		$cache  = $this->view_args['persons'];
		$keys   = array_keys( (array) ( $cache->data->rows->{1} ?? [] ) );
		$values = $cache->data->headers ?? [];

		return array_merge(
			[ 'cb' => 'Whatever you wish)))) - WP sometime mistic' ],
			array_combine( $keys, $values )
		);
	}

	/**
	 * Define which columns are hidden
	 *
	 * @return array
	 */
	public function get_hidden_columns(): array {
		return [];
	}

	/**
	 * Bulk actions markup.
	 *
	 * @param object|array $item Row array.
	 *
	 * @return string
	 */
	public function column_cb( $item ): string {
		return sprintf( '<input disabled type="checkbox" name="element[]" value="%s" />', $item->id );
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

	/**
	 * Screen Id to option name converter.
	 *
	 * @return string
	 */
	private function get_per_page_option_name(): string {
		return str_replace( '-', '_', $this->screen->id ) . '_per_page';
	}
}
