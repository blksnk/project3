import React, {Component} from 'react';

import Edit from './Edit.js';
import Preview from './Preview.js';

import './Layout.css';
import './Preview.css'

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			layout: {
				header: {
					settings: {
						name: "",
						type: "",
						src: "",
						inner: "",
					},

					styling: {
						classes: "",
						width: "",
						height: "",
						color: "",
						background: "",
					},

					children: {
						navbar: {
							settings: {
								name: "",
								type: "",
								src: "",
								inner: "",
							},

							styling: {
								classes: "",
								width: "",
								height: "",
								color: "",
								background: "",
							},

							children: {
								logo: {
									settings: {
										name: "",
										type: "",
										src: "https://media.giphy.com/media/3oEhmRCUibMWgn1OCs/giphy.gif",
										inner: "",
									},

									styling: {
										classes: "nav-logo",
										width: "100vw",
										height: "",
										color: "",
										background: "",
									},

									children: {

									}
								},

								link: {
									settings: {
										name: "",
										type: "",
										src: "/test",
										inner: "This is a test link",
									},

									styling: {
										classes: "nav-logo",
										width: "100vw",
										height: "",
										color: "",
										background: "",
									},

									children: {

									}
								}
							},
						},

						hero_image: {
							settings: {
								name: "",
								type: "",
								src: "",
								inner: "",
							},

							styling: {
								classes: "",
								width: "",
								height: "",
								color: "",
								background: "",
							},

							children: {
								background: {
									settings: {
										name: "",
										type: "",
										src: "https://store-images.s-microsoft.com/image/apps.56149.13510798883387146.65b28e41-8f10-4faa-847d-ee9145fa6c6e.bb8f778d-3c22-42cf-bdbc-284f4c68c9e7?mode=scale&q=90&h=1080&w=1920",
										inner: "",
									},

									styling: {
										classes: "",
										width: "",
										height: "",
										color: "",
										background: "",
									},

									children: {
										
									},
								},

								heading: {
									settings: {
										name: "",
										type: "",
										src: "",
										inner: "This is a test bitches",
									},

									styling: {
										classes: "",
										width: "",
										height: "",
										color: "",
										background: "",
									},

									children: {
										
									},
								},

								link: {
									settings: {
										name: "",
										type: "",
										src: "",
										inner: "",
									},

									styling: {
										classes: "",
										width: "",
										height: "",
										color: "",
										background: "",
									},

									children: {
										
									},
								}
							},
						},
					},
				},

				body: {
					settings: {
						name: "",
						type: "",
						src: "",
						inner: "",
					},

					styling: {
						classes: "",
						width: "",
						height: "",
						color: "",
						background: "",
					},

					children: {
						
					},
				},

				footer: {
					settings: {
						name: "",
						type: "",
						src: "",
						inner: "",
					},

					styling: {
						classes: "",
						width: "",
						height: "",
						color: "",
						background: "",
					},

					children: {
						
					},
				}
			}
		}
	}

	updateLayout(newLayout) {
		console.log('new layout', newLayout)
		this.setState({layout: newLayout})
	}

	render() {

		return (
			<section className="Layout">
				<Edit layout={this.state.layout} onLayoutChange={newLayout => this.updateLayout(newLayout)}/>
				<Preview layout={this.state.layout} />

			</section>
		)
	}
}


export default Layout;