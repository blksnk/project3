import React, {Component} from 'react';

class Navbar_module extends Component {
	constructor(props) {
		super(props);


	}

	activateModule() {

			
	}

	sendChanges(event) {
		const {name, value} = event.target
		//send whole event to edit component for processing
		this.props.getChanges(name, value);
	}

	render() {


		return(
			<div className='Navbar_module module'>
				<h4>Nav Bar</h4>

				<label>
					Navbar height
					<input onChange={event => this.sendChanges(event)} type="number" name='{"component": "header", "child1": "navbar", "aspect": "styling", "property": "height" }'/>
				</label>

				
			</div>
		)
	}
}

export default Navbar_module;