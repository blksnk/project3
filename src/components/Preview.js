import React, {Component} from 'react';

import _ from 'underscore';

class Preview extends Component {
	constructor(props) {
		super(props);

	}

	translateImg(path) {
		console.log(path)
		return <img src={eval(path).settings.src} alt=""/>
	}

	translateH1(path) {
		return (

			<h1 className="hero_image_heading">
				{eval(path).settings.inner}
			</h1>
		)

	}

	translateHeroImg() {
		return(
			<div className='hero_image'>
				{this.translateImg('this.props.layout.header.children.hero_image.children.background')}
				{this.translateH1('this.props.layout.header.children.hero_image.children.heading')}
			</div>
		)
	}

	translateHeader() {
		const header = 
		<header>
			{
				_.has(this.props.layout.header.children, 'navbar') ?
					this.translateNavbar() 
					: null
			}

			{
				_.has(this.props.layout.header.children, 'hero_image') ?
					this.translateHeroImg()
					: null
			}
		</header>

		return header;
	}

	translateNavbar() {
		const navbar = 
		<nav>
			aaaaaaaa
		</nav>

		return navbar;
	}

	render() {
		console.log(this.props.layout)
		return (
			<div className='Preview'>
				<h3>Preview layout</h3>

				{this.translateHeader()}

			</div>
		)
	}


}

export default Preview;