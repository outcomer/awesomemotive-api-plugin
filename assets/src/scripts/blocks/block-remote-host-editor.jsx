;(function (wp) {
	const { registerBlockType } = wp.blocks
	const { Fragment, useState, useEffect } = wp.element
	const { apiFetch } = wp
	const { BlockControls, BlockIcon } = wp.blockEditor
	const { __ } = wp.i18n
	const {
		Flex,
		FlexItem,
		Placeholder,
		ToolbarGroup,
		ToolbarButton,
		Spinner,
		__experimentalSpacer: Spacer,
		__experimentalInputControl: InputControl,
		__experimentalHeading: Heading,
	} = wp.components

	/* eslint-disable max-len */
	const exampleImageData = (
		<svg viewBox="0 0 274 165" xmlns="http://www.w3.org/2000/svg">
			<path
				d="m127.03842,33.42546c-20.95784,0 -37.99545,17.03761 -37.99545,37.99545c0,20.95784 17.03761,37.99545 37.99545,37.99545c8.29727,0 15.95619,-2.70197 22.21057,-7.2289l29.38711,29.38709l6.32092,-6.32092l-29.11645,-29.11647c5.71456,-6.65052 9.19329,-15.27632 9.19329,-24.71624c0,-20.95784 -17.03761,-37.99545 -37.99545,-37.99545zm0,4.47005c18.54205,0 33.5254,14.98335 33.5254,33.5254c0,18.54205 -14.98335,33.5254 -33.5254,33.5254c-18.54205,0 -33.5254,-14.98335 -33.5254,-33.5254c0,-18.54205 14.98335,-33.5254 33.5254,-33.5254zm-17.88021,29.05534a4.47005,4.47005 0 0 0 -4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,-4.47005a4.47005,4.47005 0 0 0 -4.47005,-4.47005zm17.88021,0a4.47005,4.47005 0 0 0 -4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,-4.47005a4.47005,4.47005 0 0 0 -4.47005,-4.47005zm17.88021,0a4.47005,4.47005 0 0 0 -4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,-4.47005a4.47005,4.47005 0 0 0 -4.47005,-4.47005z"
				fill="black"
				id="svg_1"
			/>
		</svg>
	)
	const icon = (
		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path
					d="m10.26818,0.68033c-0.23253,0 -0.43057,0.16886 -0.46806,0.39855l-0.45323,2.77778c-0.56851,0.16324 -1.11543,0.38776 -1.63126,0.67012l-2.29211,-1.63775c-0.1884,-0.13477 -0.448,-0.11367 -0.61172,0.05005l-1.84537,1.84444c-0.16277,0.16277 -0.18523,0.41962 -0.05283,0.60802l1.61273,2.30694c-0.28663,0.51963 -0.5156,1.06915 -0.68216,1.64146l-2.76666,0.46157c-0.22873,0.03796 -0.39669,0.23508 -0.39669,0.46714l0,2.61002c0,0.23016 0.16477,0.42727 0.39113,0.46713l2.76759,0.49123c0.16562,0.57041 0.39364,1.1204 0.68216,1.64146l-1.63311,2.28377c-0.13477,0.18887 -0.11274,0.44753 0.05098,0.61173l1.84444,1.84722c0.16324,0.16324 0.42104,0.18476 0.60802,0.05283l2.31157,-1.61828c0.51963,0.28568 1.06696,0.51148 1.63404,0.67567l0.46343,2.78149c0.03796,0.22873 0.23508,0.39669 0.46714,0.39669l2.61002,0c0.22968,0 0.4268,-0.16477 0.46713,-0.39113l0.1242,-0.70163c-0.30086,-0.21972 -0.57893,-0.46677 -0.83139,-0.73963l-0.15756,0.88329l-1.80922,0l-0.44767,-2.68695c-0.03085,-0.18745 -0.16994,-0.33723 -0.35406,-0.38279c-0.68383,-0.16847 -1.33895,-0.43913 -1.94732,-0.80358c-0.16135,-0.09681 -0.36345,-0.08964 -0.51626,0.01761l-2.23187,1.5636l-1.27906,-1.27998l1.57658,-2.20591c0.1101,-0.15423 0.11862,-0.35952 0.02039,-0.52182c-0.36778,-0.6079 -0.64156,-1.26526 -0.81193,-1.95288c-0.04556,-0.18175 -0.19356,-0.31994 -0.37816,-0.35221l-2.67212,-0.47362l0,-1.81014l2.67027,-0.44489c0.1865,-0.03085 0.33676,-0.16996 0.38279,-0.35313c0.17321,-0.69142 0.44557,-1.34783 0.81192,-1.95288c0.09728,-0.16087 0.09057,-0.36435 -0.01668,-0.51811l-1.55897,-2.22909l1.27999,-1.27906l2.2124,1.58121c0.15328,0.1101 0.35767,0.11955 0.51996,0.02132c0.60315,-0.36208 1.25873,-0.63094 1.94825,-0.79988c0.18507,-0.04556 0.32414,-0.19672 0.35499,-0.38464l0.43747,-2.68324l1.80829,0l0.47177,2.69807c0.03227,0.18507 0.16998,0.33352 0.35221,0.37908c0.68383,0.17036 1.33765,0.44329 1.94176,0.80821c0.16277,0.09871 0.36804,0.08973 0.52275,-0.02132l2.21981,-1.59604l1.27906,1.27813l-1.58121,2.25411c-0.1082,0.15328 -0.11487,0.35539 -0.01854,0.51626c0.36018,0.59936 0.62856,1.25011 0.79988,1.93156c0.04603,0.18413 0.19719,0.32276 0.38464,0.35313l2.70827,0.44303l0,1.80829l-0.88514,0.15478c0.27381,0.25293 0.52177,0.53188 0.74148,0.83417l0.69978,-0.12327c0.22731,-0.03986 0.39206,-0.23698 0.39206,-0.46714l0,-2.61002c0,-0.23253 -0.16886,-0.43057 -0.39855,-0.46806l-2.80374,-0.45879c-0.16467,-0.56282 -0.38871,-1.10347 -0.67012,-1.61551l1.63683,-2.33289c0.1324,-0.1884 0.10994,-0.44525 -0.05283,-0.60802l-1.84629,-1.84537c-0.16419,-0.1642 -0.42378,-0.18532 -0.61265,-0.04913l-2.29767,1.65165c-0.51678,-0.28568 -1.0628,-0.51146 -1.62941,-0.6766l-0.48845,-2.79446c-0.04034,-0.22731 -0.23791,-0.39299 -0.46806,-0.39299l-2.61002,0zm1.32633,7.11824c-2.09324,0 -3.79639,1.70316 -3.79639,3.79639c0,1.99738 1.55149,3.63585 3.51185,3.78249c0.08447,-0.32459 0.19605,-0.63853 0.33367,-0.93798c-0.01661,0 -0.03252,0.00278 -0.04913,0.00278c-1.57028,0 -2.8473,-1.27701 -2.8473,-2.8473c0,-1.57028 1.27701,-2.8473 2.8473,-2.8473c1.57028,0 2.8473,1.27701 2.8473,2.8473c0,0.01661 -0.00278,0.03252 -0.00278,0.04913c0.29944,-0.13762 0.61338,-0.2492 0.93798,-0.33367c-0.14664,-1.96036 -1.78511,-3.51185 -3.78249,-3.51185zm5.22004,4.27094c-2.61524,0 -4.74549,2.13025 -4.74549,4.74549c0,2.61524 2.13025,4.74549 4.74549,4.74549c1.13726,0 2.18169,-0.40385 3.00023,-1.07422l2.83339,2.83339l0.67104,-0.67104l-2.83339,-2.83339c0.67038,-0.81854 1.07422,-1.86297 1.07422,-3.00023c0,-2.61524 -2.13025,-4.74549 -4.74549,-4.74549zm0,0.9491c2.10231,0 3.79639,1.69408 3.79639,3.79639c0,2.10231 -1.69408,3.79639 -3.79639,3.79639c-2.10231,0 -3.79639,-1.69408 -3.79639,-3.79639c0,-2.10231 1.69408,-3.79639 3.79639,-3.79639z"
					fill="black"
					id="svg_1"
				/>
			</g>
		</svg>
	)
	/* eslint-disable max-len */

	let fetchController
	let fetchError
	let remoteContent = []

	function BlockHandler(props) {
		const { attributes, setAttributes, className, name } = props
		const [editMode, setEditMode] = useState(true)
		const [termsFetched, setTermsFetched] = useState()

		const resetState = () => {
			setEditMode(true)
			setTermsFetched(null)
		}

		const notice = () => {
			if (fetchError) {
				return (
					<p>
						{__(
							'Can not render block. Browser console provided with more details.',
							'david-ev-asm-api-plugin'
						)}
					</p>
				)
			}
		}

		const jsonToTable = (title, theadData, tbodyData) => {
			return (
				<Fragment>
					<Heading level="4">{title}</Heading>
					<Spacer
						marginTop={1}
						style={{
							width: '100%',
						}}
					/>
					<table>
						<thead>
							<tr>
								{theadData.map((heading) => {
									return <th key={heading}>{heading}</th>
								})}
							</tr>
						</thead>
						<tbody>
							{tbodyData.map((row, index) => {
								return (
									<tr key={index}>
										{Object.entries(row).map((rowData) => {
											let value
											if ('date' === rowData[0]) {
												value = new Date(rowData[1] * 1000).toLocaleDateString(
													navigator.language
												)
											} else {
												value = rowData[1]
											}
											return <td key={rowData[1]}>{value}</td>
										})}
									</tr>
								)
							})}
						</tbody>
					</table>
				</Fragment>
			)
		}

		const getExample = () => {
			return exampleImageData
		}

		const getBlockControls = () => {
			return (
				<BlockControls key="block-controls">
					<ToolbarGroup label={__('Options', 'david-ev-asm-api-plugin')}>
						<ToolbarButton
							label={
								editMode
									? __('Preview', 'david-ev-asm-api-plugin')
									: __('Edit', 'david-ev-asm-api-plugin')
							}
							icon={editMode ? 'visibility' : 'edit'}
							onClick={() => {
								if (!editMode) {
									fetchController?.abort()
								}
								setTermsFetched(!editMode)
								setEditMode(!editMode)
							}}
						/>
					</ToolbarGroup>
				</BlockControls>
			)
		}

		const getBlockEdit = () => {
			const block = wp.blocks.getBlockType(name)

			return (
				<Placeholder
					key="block-editor"
					icon={<BlockIcon icon={icon} />}
					label={block.title}
					className={className}
					instructions={__(
						'Block does not provide any specific options.',
						'david-ev-asm-api-plugin'
					)}
				>
					<div className="editor-inner">
						<InputControl
							label={__(
								'But you may set block heading',
								'david-ev-asm-api-plugin'
							)}
							labelPosition="top"
							value={attributes.blockTitle}
							onChange={(nextValue) => {
								return setAttributes({ blockTitle: nextValue })
							}}
						/>
					</div>
					<Spacer
						marginTop={1}
						style={{
							width: '100%',
						}}
					/>
					<div className="editor-errors">{notice()}</div>
				</Placeholder>
			)
		}

		const getBlockPreview = () => {
			if (termsFetched) {
				try {
					const content = jsonToTable(
						remoteContent.title,
						remoteContent.data.headers,
						Object.values(remoteContent.data.rows)
					)

					return (
						<div
							className={`preview-inner ${window.DavidEvAsmApiPlugin.constants.cssNamespaces.front}`}
							key="block-preview"
						>
							{content}
						</div>
					)
				} catch (error) {
					window.DavidEvAsmApiPlugin.logger.error(error)
					fetchError = true

					resetState()
				}
			}

			return (
				<Placeholder className="preview-inner" key="block-preview">
					<Flex
						style={{
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<FlexItem>
							<Spinner />
						</FlexItem>
					</Flex>
				</Placeholder>
			)
		}

		useEffect(async () => {
			let isMounted = true
			if (!termsFetched && !editMode && !attributes.isExample) {
				try {
					if (isMounted) {
						fetchController =
							typeof AbortController === 'undefined'
								? undefined
								: new AbortController()
						const response = await apiFetch({
							path: name.split('/').join('/v1/'),
							method: 'GET',
							signal: fetchController?.signal,
						})

						if (200 === response.code) {
							remoteContent = response.content
							setTermsFetched(true)
							fetchError = false
							return
						}

						throw new Error(response.content)
					}
				} catch (error) {
					if ('AbortError' === error.name) {
						window.DavidEvAsmApiPlugin.logger.warn(
							__('Request aborted by user', 'david-ev-asm-api-plugin')
						)
						fetchError = false
					} else {
						window.DavidEvAsmApiPlugin.logger.error(error)
						fetchError = true
					}
					resetState()
				}
			}
			return () => {
				isMounted = false
			}
		}, [termsFetched])

		const render = () => {
			if (attributes.isExample) {
				return getExample()
			}

			const classes = [className]
			const content = [getBlockControls()]

			if (editMode) {
				content.push(getBlockEdit())
			} else {
				content.push(getBlockPreview())
			}

			return <div className={classes.join(' ')}>{content}</div>
		}

		return render()
	}

	registerBlockType('david-ev-asm/block-remote-host', {
		title: __(
			'Remote host fetcher (click preview button)',
			'david-ev-asm-api-plugin'
		),
		description: __(
			'Interacts with 3rd party host via WP block.',
			'david-ev-asm-api-plugin'
		),
		icon,
		category: 'david-ev-asm-plugin-blocks',
		keywords: ['ASM'],
		styles: [],
		variations: [],
		attributes: {
			isExample: {
				type: 'boolean',
				default: false,
			},
			blockTitle: {
				type: 'string',
				default: '',
			},
		},
		example: {
			attributes: {
				isExample: true,
			},
		},
		supports: {
			multiple: true,
		},
		edit: BlockHandler,
		save(props) {
			return null
		},
	})
})(window.wp)
