'use strict'
;(function () {
	async function BlockInit() {
		let remoteContent = []

		const findBlocks = () => {
			return document.querySelectorAll(
				'.david-ev-asm-block[data-name="david-ev-asm/block-remote-host"]'
			)
		}

		const init = async () => {
			try {
				const formData = new FormData()

				formData.append('action', blockNodes[0].dataset.name)
				formData.append(
					'nonce',
					global.DavidEvAsmApiPlugin.constants.pluginNonce
				)

				const response = await fetch(
					global.DavidEvAsmApiPlugin.constants.ajaxUrl,
					{
						method: 'POST',
						cache: 'no-cache',
						body: formData,
					}
				)

				if (response.ok && 200 === response.status) {
					const body = await response.json()

					if (200 !== body.data.code) {
						throw new Error(body.data.content)
					}
					remoteContent = body.data.content
					return
				}

				throw new Error(response.status)
			} catch (error) {
				window.DavidEvAsmApiPlugin.logger.error(error)
			}
		}

		const jsonToTable = () => {
			const table = document.createElement('TABLE')
			let row = table.insertRow(-1)
			const titleCell = document.createElement('TH')
			titleCell.innerText = remoteContent.title
			titleCell.colSpan = remoteContent.data.headers.length
			row.appendChild(titleCell)

			// headers
			row = table.insertRow(-1)
			for (let i = 0; i < remoteContent.data.headers.length; i++) {
				const headerCell = document.createElement('TH')
				headerCell.innerText = remoteContent.data.headers[i]
				row.appendChild(headerCell)
			}

			// rows
			for (const i in remoteContent.data.rows) {
				const element = remoteContent.data.rows[i]
				row = table.insertRow(-1)

				for (const z in element) {
					let value
					switch (z) {
						case 'date':
							value = new Date(element[z] * 1000).toLocaleDateString('en-US')
							break

						default:
							value = element[z]
							break
					}

					const cell = row.insertCell(-1)
					cell.innerText = value
				}
			}

			return table
		}

		const fillContainers = (blockHtml) => {
			blockNodes.forEach((blockNode) => {
				blockNode.innerHTML = null
				const atts = JSON.parse(blockNode.dataset.atts)
				if ('undefined' !== typeof atts.blockTitle && '' !== atts.blockTitle) {
					const H4 = document.createElement('H4')
					H4.innerText = atts.blockTitle
					blockNode.appendChild(H4)
				}
				blockNode.appendChild(blockHtml)
			})
		}

		const getErrorMarkup = () => {
			const error = document.createElement('DIV')
			const errorWrapper = document.createElement('DIV')
			error.classList.add('error')
			errorWrapper.classList.add('error-wrapper')
			errorWrapper.appendChild(error)

			return errorWrapper
		}

		const blockNodes = findBlocks()

		if (blockNodes.length === 0) return

		await init()

		let blockHtml = getErrorMarkup()

		try {
			blockHtml = jsonToTable()
		} catch (error) {
			global.DavidEvAsmApiPlugin.logger.error(error)
		}

		fillContainers(blockHtml)
	}

	document.addEventListener(
		'DOMContentLoaded',
		() => BlockInit.call(BlockInit),
		false
	)
})()
