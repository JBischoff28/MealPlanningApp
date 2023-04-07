import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { app_id, app_key } from '../../localKey';
import axios from 'axios';

const MealCard = (props) => {

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
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div className="mealCardContainer">
            {props.mymeals.map((meal) => {
                if (meal) {
                    return (
                        <div className='meal' key={meal.id}>
                            <div className='mealDetails'>
                                <p>{meal.name}</p>
                                <div className='mealDishes'>
                                    {meal.dish.map((onedish) => {
                                        if (onedish) {
                                            {manipulateDishes(onedish.foodId)}
                                            return (
                                                <div className='dish' key={onedish.id}>
                                                    <Link to={`/recipe/${editURI(onedish)}`}>
                                                        <p>{onedish.foodId}</p>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
     );
}
 
export default MealCard;