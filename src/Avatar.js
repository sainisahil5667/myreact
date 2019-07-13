import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Avatarlist from './Avatarlist';
import './Avatar.css';
import 'tachyons';

	class Demos extends Component{
		constructor(){
			super();
			this.state = {
				name:"Welcome to the Avatar World"
			}
		}
		namechange(){
			this.setState({
				name : "Subscribe to my channnel"
			})
		}

		render(){

			const avatarlistarray =[

	{

	id:1,
	name:"Sahil Saini",
	work:"Frontend Developer"
},


	{

	id:2,
	name:"Farukh Saifi",
	work:"Full stack Developer"
},


	{

	id:3,
	name:"Sourya",
	work:"QA"
},


	{

	id:4,
	name:"Abhisar",
	work:"Backend Developer"
}
]

const arrayavtarcard = avatarlistarray.map((avatar, i) =>{
		  return <Avatarlist id="{avatarlistarray[i].name}" name={avatarlistarray[i].name} work={avatarlistarray[i].work} />


})


				return (
		<div className="view"> 
			<h1>{this.state.name}</h1>
		    {arrayavtarcard}
				<button onClick ={ () => this.namechange() }>Subscribe</button>


		</div>
		
		)
		}
	}

	



	



export default Demos;
