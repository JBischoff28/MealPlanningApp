import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { app_id, app_key } from '../../localKey';
import axios from 'axios';


const RecipeCard = (props) => {

    const [idArray, setIdArray] = useState([]);

    function editURI(foodId) {
        let recipeId = foodId.toString().substr(44);
        return recipeId;
    }

    function manipulateDishes(foodId) {
        let recipeId = editURI(foodId);
        fetchDishes(recipeId);
    }

    async function fetchDishes(recipeId) {
        try {
            let response = await axios.get(`https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${app_id}&app_key=${app_key}`);
            console.log(response.data);
            setIdArray(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div className="recipeCardContainer">
            {props.meal.dish.map((dish) => {
                if (dish) {
                    {manipulateDishes(dish.foodId)}
                        return (
                            <div className='dish' key={dish.id}>
                                <Link to={`/recipe/${editURI(dish)}`}>
                                    <p>{dish.foodId}</p>
                                </Link>
                            </div>
                        );
                    }
            })}
        </div>
     );
}
 
export default RecipeCard;