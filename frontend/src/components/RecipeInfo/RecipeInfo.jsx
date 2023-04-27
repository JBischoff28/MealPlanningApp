import React, { useState } from 'react';
import './RecipeInfo.css';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const RecipeInfo = (props) => {

    const [user, token] = useAuth();
    const [saved, setSaved] = useState();

    async function saveRecipe(event) {
        setSaved(true);
        event.preventDefault();
        try {
            let postRequest = await axios.post(`http://127.0.0.1:8000/api/dishes/mydishes/`,
                {
                    foodId: props.thisRecipe.recipe.uri,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
        } catch (error) {
            console.log(error);
        }
    }

    function roundNum(calories) {
        let caloriesCount = Math.round(calories);
        return caloriesCount;
    }

    function calPerServing(calories, servings) {
        let caloriesPerServing = calories / servings;
        return caloriesPerServing;
    }

    return (
        <div className='infoContainer'>
            <div className='basicInfo'>
                <div className='recipeImg'>
                    <img src={props.thisRecipe.recipe.images.REGULAR.url} />
                </div>
                <div className='recipeTitle'>
                    <h2>{props.thisRecipe.recipe.label}</h2>
                </div>
                <div className='basicRecipeInfo'>
                    <p>Calories: {roundNum(props.thisRecipe.recipe.calories)}</p>
                    <p>Cuisine Type: {props.thisRecipe.recipe.cuisineType}</p>
                    <p>Meal Type: {props.thisRecipe.recipe.mealType}</p>
                    <p>Dish Type: {props.thisRecipe.recipe.dishType}</p>
                    <p>Cook Time: {(props.thisRecipe.recipe.totalTime === 0) ? <p>Cook time not provided</p> : (props.thisRecipe.recipe.totalTime + ' minutes')}</p>
                    <p>Cal/Serving: {roundNum(calPerServing(props.thisRecipe.recipe.calories, props.thisRecipe.recipe.yield))}</p>
                    <p>Servings: {props.thisRecipe.recipe.yield}</p>
                    <div className='saveRecipe'>
                        <button className='saveBtn' onClick={(event) => saveRecipe(event)}>Save this recipe!</button>
                    </div>
                    <div id='savedText'>
                        {saved ? <p>Successfully Saved!</p> : null}
                    </div>
                </div>
            </div>
            <hr />
            <div className='advancedInfo'>
                <h3>More Recipe Info</h3>
                <div className='dietLabels'>
                    {props.thisRecipe.recipe.dietLabels[0] ?
                        <div>Diet Labels: {props.thisRecipe.recipe.dietLabels.map((label, index) => {
                            return (
                                <div key={index}>
                                    {label}
                                </div>
                            )
                        })}</div> :
                        <p>Diet Labels: None</p>}
                </div>
                <div className='healthLabels'>
                    {props.thisRecipe.recipe.healthLabels[0] ?
                        <div>Health Labels: {props.thisRecipe.recipe.healthLabels.map((label, index) => {
                            return (
                                <div key={index}>
                                    {label}
                                </div>
                            )
                        })}</div> :
                        <p>Health Labels: None</p>}
                </div>
                <div className='ingredients'>
                    {props.thisRecipe.recipe.ingredients[0] ?
                        <div>Ingredients: {props.thisRecipe.recipe.ingredients.map((el, index) => {
                            return (
                                <div key={index}>
                                    {el.text}
                                </div>
                            )
                        })}</div> :
                        <p>Ingredients: None</p>}
                </div>
            </div>
            <div className='sourceSite'>
                <p>Click the link below to see more about this recipe!</p>
                <a href={props.thisRecipe.recipe.url} target='_blank'>Click here to see source website</a>
            </div>
        </div>
    );
}

export default RecipeInfo;