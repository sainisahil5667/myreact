import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

class Demo extends Component {

	render() {
		return ( 
		<div className="main"> 
		<h1>Hello {this.props.name}!!</h1>
				<h2>sahil React!!</h2>

		</div>
		
		);
	}

}
export default Demo;



