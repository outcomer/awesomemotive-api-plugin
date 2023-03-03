<?php
/**
 * David_Ev_Asm_Autoloader
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Exception;

/**
 * Class that autoloads classes.
 * Namespace part "DavidEv\Asm\ApiPlugin"
 * will be replaced with "includes" relative to plugin folder.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Autoloader {

	/**
	 * Phrase tha all classes starts with.
	 *
	 * @var string
	 */
	private string $class_name_prefix;

	/**
	 * Subpath to the includes directory.
	 *
	 * @var string
	 */
	private string $namespace_base;

	/**
	 * Paths to the root of directory with code.
	 *
	 * @var string
	 */
	private string $include_path;

	/**
	 * Ls_Autoloader Constructor.
	 *
	 * @param string $class_name_prefix Paths to the root of directory with code.
	 * @param string $namespace_base    Subpath to the includes directory.
	 * @param string $include_path      Paths to the root of directory with code.
	 *
	 * @return void
	 */
	public function __construct( string $class_name_prefix, string $namespace_base, string $include_path ) {
		if ( function_exists( '__autoload' ) ) {
			spl_autoload_register( [ $this, 'autoload' ] );
		}

		$this->class_name_prefix = $class_name_prefix;
		$this->namespace_base    = $namespace_base;
		$this->include_path      = $include_path;

		spl_autoload_register( [ $this, 'autoload' ] );
	}

	/**
	 * Auto-load classes on demand to reduce memory consumption.
	 *
	 * @param string $class Fully cvalified class name to search and include.
	 *
	 * @return void
	 */
	public function autoload( string $class ): void {

		if ( 0 !== strpos( $class, $this->namespace_base ) ) {
			return;
		}

		$file = $this->get_filename_from_class( $class );
		$this->load_file( $file );
	}

	/**
	 * Take a class name and turn it into a file name following naming convention.
	 * If the class uses a namespace, then $this->namespace_base in the route
	 * will be replaced with the $this->namespace_base
	 * Example: "DavidEv\Asm\ApiPlugin\Includes\Pluigin\David_Ev_Asm_Setup" -> "includes\Config\David_Ev_Asm_Setup".
	 * The resulting string will be normalized to the correct file path.
	 *
	 * @param string $class Fully qualified class name to search and include.
	 *
	 * @return string Path to the file.
	 */
	private function get_filename_from_class( string $class ): ?string {

		$class_path = null;

		// Replace fragments A,B.. with real directory name in "A\B\C\...".
		if ( 0 === strpos( $class, $this->namespace_base ) ) {
			$class = strtolower( str_replace( $this->namespace_base, (string) null, $class ) );
		}

		if ( false !== strpos( strtolower( $class ), strtolower( $this->class_name_prefix ) ) ) {

			// Replace _ with - to match file mames.
			// Replace \ slashes to / - Unix format.
			$class = str_replace( [ '_', '\\' ], [ '-', '/' ], $class );

			// Get class name from path.
			$class_name = basename( $class );

			// Build file name and path.
			if ( false === strpos( $class, 'traits' ) ) {
				$class_path = str_replace( $class_name, 'class-' . $class_name . '.php', $class );
			} else {
				$class_path = str_replace( $class_name, 'trait-' . $class_name . '.php', $class );
			}
		}

		return $class_path;
	}

	/**
	 * Include a class file.
	 *
	 * @param string $file Full file name with namespace to include.
	 *
	 * @return void
	 * @throws Exception If fail to load file.
	 */
	private function load_file( string $file ): void {

		$fullpath = $this->include_path . $file;

		if ( is_readable( $fullpath ) && is_file( $fullpath ) && file_exists( $fullpath ) ) {

			/**
			 * Fire befole include class file.
			 *
			 * @hook david_ev_asm_api_plugin__include_path
			 */
			$fullpath = apply_filters( 'david_ev_asm_api_plugin__include_path', $fullpath );
			include_once $fullpath;
			return;
		}

		throw new Exception( sprintf( 'Fail to include file by path %s.', $fullpath ) );
	}
}
