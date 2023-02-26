/**
 * Console logger. Self invoked.
 *
 * @return {Object} Callbacks.
 */
const loggerFn = (() => {
	const methodToColorMap = {
		debug: '#7f8c8d',
		log: '#2ecc71',
		warn: '#f39c12',
		error: '#c0392b',
		table: '#c0392b',
	}

	const print = function (method, args) {
		const styles = [
				`background: ${methodToColorMap[method]}`,
				`border-radius: 0.3em`,
				`color: white`,
				`font-weight: bold`,
				`padding: 2px 0.5em`,
			],
			logPrefix = ['%cdavid-ev-asm-logger', styles.join(';')]

		if (DavidEvAsmApiPlugin.constants.scriptDebug === false) {
			return
		}

		/* eslint-disable no-console */
		console[method](...logPrefix, ...args)
		/* eslint-enable no-console */
	}

	const api = {}
	const loggerMethods = Object.keys(methodToColorMap)

	for (const key of loggerMethods) {
		const method = key

		api[method] = (...args) => {
			print(method, args)
		}
	}

	return api
})()

global.DavidEvAsmApiPlugin = global.DavidEvAsmApiPlugin || {}

global.DavidEvAsmApiPlugin = {
	...global.DavidEvAsmApiPlugin,
	...{ logger: loggerFn },
}
