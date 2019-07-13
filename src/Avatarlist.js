import React from 'react';
import './Avatar.css';



const Avatarlist = (props) =>{
return(
<div className="avatarstyle dib bg-light-blue ma4 pa4 tc grow shadow-4"> 
		<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"/>
		<h1> {props.name} </h1>
				<p> {props.work} </p>
				</div>

	)

}

export default Avatarlist;