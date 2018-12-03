import React, {Component} from 'react';
import update from 'immutability-helper';
import _ from 'underscore';

import './Edit.css'

//importing modules
import Navbar_module from './modules/Navbar_module.js'
import Hero_image_module from './modules/Hero_image_module.js'
	


class Edit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			layout: this.props.layout
		}
	}


	sendLayout() {

		this.props.onLayoutChange(this.state.layout)
	}

	processChanges(name, value) {
		console.log(name, value)
		const selected = JSON.parse(name);
		console.log(selected)

		if(selected.child2) {
			const newLayout = update(this.state.layout, {
				[selected.component]: {children: {
					[selected.child1]: {children: { 
						[selected.child2]: {
							[selected.aspect]: {
								[selected.property]: {$set: value}}
						}}
					}
				}}
			})

			this.setState({layout: newLayout});
		}

		else if (selected.child1) {
			const newLayout = update(this.state.layout, {
				[selected.component]: {children: {
					[selected.child1]: {
						[selected.aspect]: {
							[selected.property]: {$set: value}
						}
					}
				}}
			})

			this.setState({layout: newLayout});
		}

		else {
			const newLayout = update(this.state.layout, {
				[selected.component]: {
					[selected.aspect]: {
						[selected.property]: {$set: value}
					}
				}
			})
		}
	}

	render() {
		return (
			<div className='Edit' onChange={() => this.sendLayout()}>
				<h3>Edit layout</h3>
				
				<div>
					<h4>Header</h4>

					<Navbar_module getChanges={(name, value) => this.processChanges(name, value)} />
					<Hero_image_module />


				</div>

				<div>
					<h4>Body</h4>
				</div>

				<div>
					<h4>Footer</h4>
				</div>
			</div>
		)
	}


}

export default Edit;