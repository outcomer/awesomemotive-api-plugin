<?php
/**
 * ApiPlugin_Requirements
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
// phpcs:ignore Generic.Arrays.DisallowLongArraySyntax.Found

/**
 * Class validates base requirements.
 * !!!!!!! Keep syntax as simple as possible !!!!!
 * To let validation be passed at minimum possible PHP version.
 *
 * phpcs:disable Generic.Arrays.DisallowLongArraySyntax.Found
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Requirements {

	/**
	 * Minimum required version.
	 *
	 * @var string
	 */
	const MARIA_DB_REQUIRED = '10.5.0';

	/**
	 * Minimum required version.
	 *
	 * @var string
	 */
	const MYSQL_DB_REQUIRED = '8.0.0';

	/**
	 * The single instance of the class.
	 *
	 * @var ApiPlugin_Requirements
	 */
	private static $instance = null;

	/**
	 * The list of errors considered violated requirements.
	 *
	 * @var array
	 */
	private $errors = array();

	/**
	 * Plugin annotations info.
	 *
	 * @var object
	 */
	private $plugin;

	/**
	 * David_Ev_Asm_Requirements Constructor.
	 */
	private function __construct() {

		if ( ! function_exists( 'is_plugin_active' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		$this->plugin = (object) get_plugin_data( DAVID_E_ASM_API_PLUGIN_FILE );
		$this->validate_environment();
		$this->notify();

		return false;
	}

	/**
	 * David_Ev_Asm_Requirements Instance.
	 * Ensures only one instance of David_Ev_Asm_Requirements is loaded or can be loaded.
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
	 * Validate environment against required.
	 *
	 * @return void
	 */
	private function validate_environment(): void {

		global $wpdb;

		$php_version = PHP_VERSION;
		$wp_version  = get_bloginfo( 'version' );
		$db_version  = $wpdb->db_version();
		$server_info = $wpdb->get_var( 'SELECT VERSION();' );

		if ( strpos( $server_info, 'MariaDB' ) ) { // MariaDB.

			preg_match( '/\s*((?:[0-9]+\.?)+)/i', $server_info, $matches );

			if ( version_compare( $matches[1], self::MARIA_DB_REQUIRED, '<' ) ) {
				$this->errors['fatal'][] = sprintf(
					// translators: %1$s - plugin name, %2$s - MySQL version.
					__( '%1$s requires at least MariaDB %12$s and above or MySQL %3$s and above, you have MariaDB %4$s', 'david-ev-asm-api-plugin' ),
					$this->plugin->Name,
					self::MARIA_DB_REQUIRED,
					self::MYSQL_DB_REQUIRED,
					$db_version
				);
			}
		} else { // MySQL.

			if ( version_compare( $db_version, MYSQL_DB_REQUIRED, '<' ) ) {
				$this->errors['fatal'][] = sprintf(
					// translators: %1$s - plugin name, %2$s - MySQL version.
					__( '%1$s requires at least MariaDB %12$s and above or MySQL %3$s and above, you have MariaDB %4$s', 'david-ev-asm-api-plugin' ),
					$this->plugin->Name,
					self::MARIA_DB_REQUIRED,
					self::MYSQL_DB_REQUIRED,
					$db_version
				);
			}
		}

		if ( version_compare( $php_version, $this->plugin->RequiresPHP, '<' ) ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			$this->errors['fatal'][] = sprintf(
				// translators: %1$s - plugin name, %2$s - PHP version.
				__( '%1$s requires at least PHP %2$s version or higher, you have PHP %3$s', 'david-ev-asm-api-plugin' ),
				$this->plugin->Name,
				$this->plugin->RequiresPHP,
				$php_version
			);
		}

		if ( version_compare( $wp_version, $this->plugin->RequiresWP, '<' ) ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			$this->errors['fatal'][] = sprintf(
				// translators: %1$s - plugin name, %2$s - PHP version.
				__( '%1$s requires at least WordPress %2$s version or higher, you have WordPress %3$s', 'david-ev-asm-api-plugin' ),
				$this->plugin->Name,
				$this->plugin->RequiresWP,
				$wp_version
			);
		}

		if ( ! file_exists( DAVID_E_ASM_PLUGIN_DIR . '/vendor/autoload.php' ) ) {
			$this->errors['fatal'][] = sprintf(
				// translators: %1$s - file name, %2$s - console command name.
				__( 'No %1$s file found in "vendor" folder. Did you run %2$s command?', 'david-ev-asm-api-plugin' ),
				'<span style="background: #d7d7d7;border-radius: 3px;padding: 1px 5px;">autoload.php</span>',
				'<span style="background: #d7d7d7;border-radius: 3px;padding: 1px 5px;">composer install</span>'
			);
		}
	}

	/**
	 * Notify owner on found problems.
	 *
	 * @return void
	 */
	public function notify(): void {

		if ( false !== strpos( $_SERVER['REQUEST_URI'], '/wp-json/' ) ) {
			return;
		}

		if ( wp_doing_ajax() ) {
			return;
		}

		$this->show_notification();
	}

	/**
	 * If major requirements violated shows warning in front and die.
	 *
	 * @return void
	 */
	public function show_notification(): void {

		if ( ! empty( $this->errors['fatal'] ) && ! is_admin() ) {

			// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			// translators: %1$s - plugin name.
			$err_html  = '<h3>' . sprintf( esc_html__( '%1$s can\'t be launched due to its requirements violation:', 'david-ev-asm-api-plugin' ), $this->plugin->Name ) . '</h2>';
			$err_html .= '<li>' . implode( '</li><li>', $this->errors['fatal'] ) . '</li>';
			wp_die(
				$err_html,
				// translators: %1$s - plugin name.
				sprintf( esc_html__( '%1$s requirement missed', 'david-ev-asm-api-plugin' ), $this->plugin->Name ),
				array(
					'response'  => 400,
					'exit'      => true,
					'back_link' => true,
				)
			);
			// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		add_action( 'admin_notices', array( $this, 'show_admin_notification' ) );
		add_action( 'network_admin_notices', array( $this, 'show_admin_notification' ) );
	}

	/**
	 * Render admin notice.
	 *
	 * @return void
	 */
	public function show_admin_notification(): void {

		global $current_screen;

		$e = false;

		$all_errors = [];

		switch ( $current_screen->id ) {
			case 'widgets':
			case 'page':
				// nothing for now.
				break;

			default:
				if ( empty( $this->errors ) ) {
					break;
				}
				$e = $this->errors;
		}

		if ( ! $e ) {
			return;
		}

		foreach ( $e as $scope => $errors ) {
			$all_errors = array_merge( $all_errors, $errors );
		}

		$err_html = '<li>' . implode( '</li><li>', $all_errors ) . '</li>';
		// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
		?>
		<div class="notice notice-error">
			<p>
				<strong>
					<?php // translators: %1$s - plugin name. ?>
					<?php printf( esc_html__( '%1$s requirements violation:', 'david-ev-asm-api-plugin' ), $this->plugin->Name ); ?>
				</strong>
			</p>
			<ul style="list-style: inside;">
				<?php echo $err_html; ?>
			</ul>
		</div>
		<?php
		// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Returns all found violations.
	 *
	 * @return string[]
	 */
	public function get_errors(): array {
		return $this->errors;
	}
}
