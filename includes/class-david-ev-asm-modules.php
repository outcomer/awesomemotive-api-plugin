<?php
/**
 * David_Ev_Asm_Modules
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use DavidEv\Asm\ApiPlugin\Includes\{
	David_Ev_Asm_Autoloader,
	David_Ev_Asm_Requirements,
};

use DavidEv\Asm\ApiPlugin\Includes\Modules\{
	Blocks\David_Ev_Asm_Block_Factory,
	Command\David_Ev_Asm_Org_Commands,
	Config\David_Ev_Asm_Setup,
	Config\David_Ev_Asm_Assets,
	Admin\David_Ev_Asm_Menu,
};

/**
 * Modules dispatcher.
 *
 * @package DavidEvAsmApiPlugin
 */
abstract class David_Ev_Asm_Modules {

	/**
	 * Class instance.
	 *
	 * @var David_Ev_Asm_Requirements
	 */
	private David_Ev_Asm_Requirements $requirements;

	/**
	 * Class instance.
	 *
	 * @var David_Ev_Asm_Autoloader
	 */
	private David_Ev_Asm_Autoloader $autoloader;

	/**
	 * Full class name.
	 *
	 * @var string
	 */
	private string $assets;

	/**
	 * Class instance.
	 *
	 * @var David_Ev_Asm_Block_Factory
	 */
	private David_Ev_Asm_Block_Factory $blocks;

	/**
	 * Class instance.
	 *
	 * @var David_Ev_Asm_Setup
	 */
	private David_Ev_Asm_Setup $setup;

	/**
	 * Class instance.
	 *
	 * @var David_Ev_Asm_Menu
	 */
	private David_Ev_Asm_Menu $admin;

	/**
	 * Class instance.
	 *
	 * @var David_Ev_Asm_Org_Commands
	 */
	private David_Ev_Asm_Org_Commands $org_commands;

	/**
	 * Module setter.
	 *
	 * @return void
	 */
	protected function set_module_autoloader(): void {
		$class_name_prefix = DAVID_E_ASM_CLASS_NAME_PREFIX;
		$include_path      = DAVID_E_ASM_PLUGIN_DIR;
		$namespace_base    = DAVID_E_ASM_CLASS_BASE_NAMESPACE;

		$this->autoloader = new David_Ev_Asm_Autoloader(
			$class_name_prefix,
			$namespace_base,
			$include_path
		);
	}

	/**
	 * Module getter.
	 *
	 * @return David_Ev_Asm_Autoloader
	 */
	public function get_module_autoloader(): David_Ev_Asm_Autoloader {
		return $this->autoloader;
	}

	/**
	 * Module setter.
	 *
	 * @return void
	 */
	protected function set_module_requirements(): void {
		$this->requirements = David_Ev_Asm_Requirements::instance();
	}

	/**
	 * Module getter.
	 *
	 * @return David_Ev_Asm_Requirements
	 */
	public function get_module_requirements(): David_Ev_Asm_Requirements {
		return $this->requirements;
	}

	/**
	 * Module setter.
	 *
	 * @return void
	 */
	protected function set_module_assets(): void {
		$this->assets = David_Ev_Asm_Assets::init();
	}

	/**
	 * Module getter.
	 *
	 * @return string
	 */
	public function get_module_assets(): string {
		return $this->assets;
	}

	/**
	 * Module setter.
	 *
	 * @return void
	 */
	protected function set_module_blocks(): void {
		$this->blocks = David_Ev_Asm_Block_Factory::instance();
	}

	/**
	 * Module getter.
	 *
	 * @return David_Ev_Asm_Block_Factory
	 */
	public function get_module_blocks(): David_Ev_Asm_Block_Factory {
		return $this->blocks;
	}

	/**
	 * Module setter.
	 *
	 * @return void
	 */
	protected function set_module_setup(): void {
		$this->setup = David_Ev_Asm_Setup::instance();
	}

	/**
	 * Module getter.
	 *
	 * @return David_Ev_Asm_Setup
	 */
	public function get_module_setup(): David_Ev_Asm_Setup {
		return $this->setup;
	}

	/**
	 * Module setter.
	 *
	 * @return void
	 */
	protected function set_module_admin(): void {
		$this->admin = David_Ev_Asm_Menu::instance();
	}

	/**
	 * Module getter.
	 *
	 * @return David_Ev_Asm_Menu
	 */
	public function get_module_admin(): David_Ev_Asm_Menu {
		return $this->admin;
	}

	/**
	 * Module setter.
	 *
	 * @return void
	 */
	protected function set_module_org_commands(): void {
		$this->org_commands = David_Ev_Asm_Org_Commands::instance();
	}

	/**
	 * Module getter.
	 *
	 * @return David_Ev_Asm_Cli
	 */
	public function get_module_org_commands(): David_Ev_Asm_Org_Commands {
		return $this->org_commands;
	}
}
