import React, {Component} from 'react';


class Hero_image_module extends Component {
	constructor(props) {
		super(props);


	}

	sendChanges(event) {
		const {name, value} = event.target
		//send whole event to edit component for processing
		this.props.getChanges(name, value);

	}

	render() {
		return(
			<div className="Hero_image_module module">
				<h4>Hero Image</h4>

				<label>
					Background Image
					<input onChange={event => this.changeBackground(event)} type="text" name='{"component: "header, "child1": "hero_image", "child2": "background", "aspect": "settings", "property": "src"}'/>
				</label>
			</div>
		)
	}
}


export default Hero_image_module;