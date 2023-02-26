import { merge } from 'webpack-merge';
import webPackConfigBase from './webpack.config.base';

class webPackConfigProd extends webPackConfigBase {

	/**
	 * Production config.
	 *
	 * @param {object}
	 */
	private configProd: object;

	/**
	 * Class constructor.
	 */
	constructor() {
		/**
		 * Production options.
		 * Will be merged with Base options.
		 */
		const optionsDev: any = {
			minSuffix: '.min',
		};
		super(optionsDev);

		this.setConfigProd();
	}

	/**
	 * Getter for base configuration.
	 *
	 * @return Array<Object>
	 */
	public getConfigToMerge(): Array<Object> {
		return [
			this.configBase,
			this.configProd,
		];
	};

	/**
	 * Here you can create alternative configuration
	 * to merge it with base.
	 *
	 * @return void
	 */
	private setConfigProd() {
		this.configProd = {
			mode: 'production',
			devtool: false,
			output: Object.assign(
				this.configBase.output,
				{
					clean: false,
				},
			),
			optimization: {
				minimize: true,
			},
		};
	};
};

module.exports = merge((new webPackConfigProd()).getConfigToMerge());