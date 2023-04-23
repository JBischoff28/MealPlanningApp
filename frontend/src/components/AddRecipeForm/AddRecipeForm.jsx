import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { app_id, app_key } from '../../localKey';
import useAuth from '../../hooks/useAuth';

const AddRecipeForm = (props) => {

    const [user, token] = useAuth();
    const [myRecipes, setMyRecipes] = useState([]);
    const [fetched, setFetched] = useState([]);

    useEffect(() => {
        getUserRecipes();
    }, []);

    async function getUserRecipes() {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/dishes/mydishes/', {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            setMyRecipes(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchDishes(recipeId) {
        try {
            let response = await axios.get(`https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${app_id}&app_key=${app_key}`);
        } catch (error) {
            console.log(error);
        }
    }

    async function addToMeal(recipeId, mealId) {
        try {
            let response = await axios.patch(`http://127.0.0.1:8000/api/meals/mymeal/dish/${recipeId}/meal/${mealId}/`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            console.log(response.status);
            setTimeout(1000, props.getMeal());
        } catch (error) {
            console.log(error);
        }
    }

    function handleAddRecipe(event, recipeId, mealId) {
        event.preventDefault();
        addToMeal(recipeId, mealId);
    }

    return ( 
        <div className='savedRecipesContainer'>
            <div className='singleRecipe'>
                {myRecipes.map((recipe) => {
                    if(recipe) {
                        return (
                            <div className='recipe' key={recipe.id}>
                                <div>{recipe.id ? <p>Recipe Id: {recipe.id}</p> : <p>LOADING...</p>}</div>
                                <button id='changeFormBtn' onClick={(event) => handleAddRecipe(event, recipe.id, props.meal.id)}>Add To Meal</button>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
     );
}
 
export default AddRecipeForm;