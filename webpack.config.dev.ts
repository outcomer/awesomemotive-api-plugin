import { merge } from 'webpack-merge';
import webPackConfigBase from './webpack.config.base';
import * as fs from 'fs';
import * as BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import { Warning } from 'postcss';

class webPackConfigDev extends webPackConfigBase {

	/**
	 * Path to local developer config.
	 */
	private localWebPackPath: string = './webpack-local.json';

	/**
	 * Development config. 
	 *
	 * @param {any}
	 */
	private configDev: any;

	/**
	 * Class constructor.
	 */
	constructor() {
		
		// Development options.
		// Will be merged with Base options.
		const optionsDev: any = {};

		super(optionsDev);

		this.setConfigDev();
	}

	/**
	 * Getter for base configuration.
	 *
	 * @return Array<Object>
	 */
	public getConfigToMerge(): Array<Object> {
		return [
			this.configBase,
			this.configDev,
		];
	};

	/**
	 * Here you can create alternative configuration
	 * to merge it with base.
	 *
	 * @return void
	 */
	private setConfigDev(): void {

		this.configDev = {
			mode: 'development',
			watch: true,
			plugins: [],
		};

		this.addBrowserSync();
	};

	/**
	 * Whether to add BrowserSync to base config.
	 *
	 * @return void
	 */
	private addBrowserSync(): void {

		try {
			if (!fs.existsSync(this.localWebPackPath)) {
				throw new Warning('webpack-local.json not found. BrowserSync plugin will not be activated. See readme.md');
			}

			const
				localWebPackConfig = require(this.localWebPackPath),
				BrowserSync = new BrowserSyncPlugin(
					{
						notify: true,
						host: localWebPackConfig.browserSync.localSiteDomain,
						open: 'external',
						port: 3000,
						logLevel: 'silent',
						files: [
							`${this.pathRoot}/**/*.*`,
						],
						proxy: {
							target: localWebPackConfig.browserSync.localSiteHost,
							ws: true
						},
						https: {
							key: localWebPackConfig.browserSync.localSiteCertPathKey,
							cert: localWebPackConfig.browserSync.localSiteCertPathCrt,
						},
					},
					{
						reload: false
					}
				);

			this.configDev.plugins.push(BrowserSync);

		} catch (err) {
			console.log("\x1b[36m%s\x1b[0m", `\n${err}\n`);
		}
	}
};

module.exports = merge((new webPackConfigDev()).getConfigToMerge());
