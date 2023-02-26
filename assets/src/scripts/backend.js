import './_components/logger.js'
;(function () {
	/**
	 * Mobile scenario handler. Perfom a set of operation
	 * if page is on mobile view.
	 */
	const isMobile = async () => {
		const mobilePlatform =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)

		if (true === mobilePlatform) {
			return true
		}

		return false
	}

	/**
	 * Actions on document.ready event.
	 */
	const initActions = () => {
		isMobile()
	}

	global.DavidEvAsmApiPlugin = global.DavidEvAsmApiPlugin || {}
	global.DavidEvAsmApiPlugin = {
		...global.DavidEvAsmApiPlugin,
		...{
			isMobile,
		},
	}

	initActions()
})()
