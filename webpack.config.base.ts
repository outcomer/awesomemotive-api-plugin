const
	path = require('path'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	CopyPlugin = require('copy-webpack-plugin'),
	ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'),
	EslintPlugin = require('eslint-webpack-plugin'),
	StylelintPlugin = require('stylelint-webpack-plugin'),
	CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/**
 * Abstract provider for webPack configuraton.
 * It can not be run on it's own. Instead create it's instance,
 * get config and pass it into webPack as exported module.
 *
 * Short explanation. Config assumes next structure for Webpack:
 *
 * plugin folder
 * └── assets
 *     └── dist (this and children will be created on compilation)
 *         |── styles
 *         |── images
 *         └── scripts
 *     └── src
 *         |── entries
 *         |── styles
 *         |── images
 *         └── scripts
 *
 * Workflow is next - webpack loop over 'module.exports.entry' and compile
 * corresponding file to 'dist' according to 'entry' directives with a same
 * name as entry.js file.
 * 
 * Folders inside dist & src will be always the same.
 *
 * This folders structure is default and can be overriden on class instantiating.
 * !!! Attention. Be careful with 'output.clear' option (can kill everything).
 */
class webPackConfigBase {

	/**
	 * This is defaults that will be used.
	 * Passing into constructor object with any key of
	 * defaults overrides correspondinf defaul value.
	 *
	 * @param {object} current Default options.
	 */
	private optionsDefault: object = {
		path: {
			assets: 'assets',     // Assets folder path relative to app.
			src: '/src',          // Path to sources relative to assets.
			entries: '/_entries', // Resulting CSS files path relative to src.
			dist: '/dist',        // Path to compiled relative to assets.
			styles: '/styles',    // Resulting CSS files path relative to dist.
			scripts: '/scripts',  // Resulting JS files path relative to dist.
			images: '/images',    // Resulting Images files path relative to dist.
		},
		minSuffix: '',            // Will be injected before file ext.
		imgExt: [                 // Images with this extensions will be processed.
			'png',
			'jpg',
			'jpeg',
			'gif',
			'svg',
			'webp',
		],
	};

	/**
	 * Resolved options.
	 *
	 * @param {object} optionsBase
	 */
	private optionsBase: any = {};

	/**
	 * Resolved path to root folder.
	 *
	 * @param {string} pathRoot
	 */
	protected pathRoot: string;

	/**
	 * Resolved path to root folder.
	 *
	 * @param {string} pathAssets
	 */
	protected pathAssets: string;

	/**
	 * Resolved path to a folder with sources.
	 *
	 * @param {string} pathSrc
	 */
	protected pathSrc: string;

	/**
	 * Path to JS source to compiled.
	 *
	 * @param {string} pathSrcScripts
	 */
	protected pathSrcScripts: string;

	/**
	 * Path to CSS source to compiled.
	 *
	 * @param {string} pathSrcStyles
	 */
	protected pathSrcStyles: string;

	/**
	 * Resolved path to assets folder.
	 *
	 * @param {string} pathDist
	 */
	protected pathDist: string;

	/**
	 * Destination path to compiled CSS.
	 *
	 * @param {string} pathDistStyles
	 */
	protected pathDistStyles: string;

	/**
	 * Destination path to compiled JS.
	 *
	 * @param {string} pathDistScripts
	 */
	protected pathDistScripts: string;

	/**
	 * Destination path to compiled images.
	 *
	 * @param {string} pathDistImages
	 */
	protected pathDistImages: string;

	/**
	 * Path to be ignored for webpack Watch mode.
	 *
	 * @param {RegExp} ignoreRegExp
	 */
	protected ignoreRegExp: RegExp;

	/**
	 * Resulting Webpack config.
	 *
	 * @param {string} configBase
	 */
	protected configBase: any = {};

	/**
	 * Class constructor.
	 *
	 * @param {object} options
	 */
	constructor(options: object) {
		this.optionsBase = this.extendDefaults(this.optionsDefault, options);
		this.setPaths();
		this.setConfigBase();
	}

	/**
	 * Setup otions.
	 *
	 * @param {object} current Default options.
	 * @param {object} updates User options
	 *
	 * @return {object}
	 */
	private extendDefaults(current: object, updates: object): object {
		for (const key of Object.keys(updates)) {
			if (!current.hasOwnProperty(key) || typeof updates[key] !== 'object' || updates[key] instanceof Element) current[key] = updates[key];
			else this.extendDefaults(current[key], updates[key]);
		}
		return current;
	}

	private setPaths() {
		this.pathRoot = __dirname;
		this.pathAssets = path.resolve(__dirname, this.optionsBase.path.assets);
		this.pathSrc = path.join(this.pathAssets, this.optionsBase.path.src);
		this.pathSrcScripts = path.join(this.pathSrc, this.optionsBase.path.scripts);
		this.pathSrcStyles = path.join(this.pathSrc, this.optionsBase.path.styles);
		this.pathDist = path.join(this.pathAssets, this.optionsBase.path.dist);
		this.pathDistStyles = path.join(this.pathDist, this.optionsBase.path.styles);
		this.pathDistScripts = path.join(this.pathDist, this.optionsBase.path.scripts);
		this.pathDistImages = path.join(this.pathDist, this.optionsBase.path.images);
		// Watch ONLY ./assets/src/*, but not hole WebPack folder.
		this.ignoreRegExp = new RegExp(`^(?!${this.pathSrc.replaceAll('\\', '/')}).+$`, 'i');
	}

	/**
	 * Actual config builder.
	 *
	 * @return {void}
	 */
	public setConfigBase = (): void => {

		this.configBase = {
			context: this.pathAssets,
			output: {
				filename: (PathData: any) => {
					return `${path.relative(this.pathDist, this.pathDistScripts)}/[name]${this.optionsBase.minSuffix}.js`;
				},
				path: this.pathDist,
				clean: true,
			},
			watchOptions: {
				ignored: this.ignoreRegExp,
			},
			resolve: {
				alias: {
					nodeModules: path.resolve(__dirname, 'node_modules/')
				}
			},
			performance: {
				hints: false
			},
			devtool: 'inline-source-map',
			entry: {
				// TO (file name) => FROM (path)
				'frontend': `${this.pathSrc}${this.optionsBase.path.entries}/entry-frontend.js`,
				'backend': `${this.pathSrc}${this.optionsBase.path.entries}/entry-backend.js`,
				'blocks/block-remote-host': `${this.pathSrc}${this.optionsBase.path.entries}/blocks/entry-block-remote-host.js`,
				'blocks/block-remote-host-editor': `${this.pathSrc}${this.optionsBase.path.entries}/blocks/entry-block-remote-host-editor.js`,
			},
			optimization: {
				minimize: false,
				minimizer: [
					'...',
					new CssMinimizerPlugin(
						{
							parallel: true,
						},
					),
					new ImageMinimizerPlugin({
						test: new RegExp(`\\.(${this.optionsBase.imgExt.join('|')})$`, 'i'),
						loader: false,
						deleteOriginalAssets: true,
						minimizer: {
							filename: () => `[path][name]${this.optionsBase.minSuffix}[ext]`,
							implementation: ImageMinimizerPlugin.imageminMinify,
							options: {
								plugins: [
									[
										'imagemin-gifsicle',
										{
											// See https://github.com/imagemin/imagemin-gifsicle
										},
									],
									[
										'imagemin-mozjpeg',
										{
											// See https://github.com/imagemin/imagemin-mozjpeg
										},
									],
									[
										'imagemin-pngquant',
										{
											// See https://github.com/imagemin/imagemin-pngquant
										},
									],
									[
										'imagemin-svgo',
										{
											// See https://github.com/imagemin/imagemin-svgo
										},
									]
								],
							},
						},
					}),
				],
			},
			plugins: [
				new CopyPlugin({
					patterns: [
						{
							from: `${this.pathSrc}${this.optionsBase.path.images}`,
							to: this.pathDistImages,
							noErrorOnMissing: true, // Prevent err throw if there are nothing to copy.
							globOptions: {
								dot: true,
								gitignore: true,
								ignore: [
									`**/*.!({${this.optionsBase.imgExt.join(',')}})`, // All other ext will be ignored.
								],
							},
						},
					],
				}),
				new MiniCssExtractPlugin({
					filename: () => `${path.relative(this.pathDist, this.pathDistStyles)}/[name]${this.optionsBase.minSuffix}.css`,
				}),
				new EslintPlugin({
					overrideConfigFile: './.eslintrc',
					files: [
						this.pathSrcScripts,
					],
					extensions: ['js', 'jsx'],
					failOnError: true,
					failOnWarning: false,
					quiet: false,
					fix: true,
				}),
				new StylelintPlugin({
					overrideConfigFile: './.stylelintrc',
					files: [
						this.pathSrcStyles,
					],
					extensions: ['css', 'scss'],
					failOnError: true,
					failOnWarning: true,
					quiet: false,
					fix: true,
				}),
				function () {
					this.hooks.done.tapAsync('done', function (stats: any, callback: Function) {
						callback();
						if (stats.compilation.errors.length > 0) {
							const
								errors = stats.compilation.errors.map((error: { name: string; }) => error.name),
								message = `This error(s) was thrown during compilation: ${errors.join(', ')}. Look at failOnError options in your config. Is it setted to true? Anyway, since errors being thrown Webpack finish it's job right at this moment and no other scripts that expected to run after this one will be fired.`;

							console.log("\x1b[33m%s\x1b[0m", `\n${message}\n`);
						}
					});
				},
			],
			module: {
				rules: [
					{
						test: /\.(jsx)$/,
						exclude: /node_modules/,
						use: ['babel-loader'],
					},
					{
						test: /\.(s*)css$/,
						use: [
							MiniCssExtractPlugin.loader,
							{
								loader: 'css-loader',
								options: {
									importLoaders: 1,
									sourceMap: true,
									url: false,
								},
							},
							{
								loader: 'postcss-loader',
								options: {
									postcssOptions: {
										plugins: [
											require('autoprefixer'),
										],
									},
									sourceMap: true,
								},
							},
							{
								loader: 'sass-loader',
								options: {
									implementation: require('sass'),
									sassOptions: {
										includePaths: ['./node_modules']
									},
									sourceMap: true,
								},
							},
						],
					},
				],
			},
		};
	}
}

export default webPackConfigBase;