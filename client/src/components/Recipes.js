import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipes = () => {
	const [recipes, setRecipes] =useState([]);
	
	useEffect(() => {
		axios
			.get('http://localhost:5000/api/restricted/data')
			.then(res => {
				setRecipes(res.data)
			})
			.catch(err => console.log('Get error!', err))
	}, [])
	return (
		<div className='recipe-card'>
			{console.log('Map recipes', recipes)}
			{recipes.map(recipe => (
			<p key={ recipe.name }>{ recipe.name }</p>
			))}
		</div>
	)
}

export default Recipes;