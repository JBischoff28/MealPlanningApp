import React, { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import './MealCard.css';


const MealCard = (props) => {

    const [user, token] = useAuth();

    function handleDeleteMeal(event, id) {
        event.preventDefault();
        if(window.confirm('Are you sure you want to delete this meal?')) {
            deleteMeal(id);
        }
    }

    async function deleteMeal(id) {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/meals/mymeal/${id}/`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }).then(
            console.log('Meal successfully deleted!'));
        } catch (error) {
            console.log(error);
        }
        setTimeout(1000, props.getUserMeals());
    }

    return ( 
        <div className="mealCardContainer">
            {props.mymeals.map((meal) => {
                if (meal) {
                    return (
                        <div className='meal' key={meal.id}>
                            <div className='mealHeader'>
                                <h3>{meal.name}</h3>
                                <div className='headerBtns'>
                                    <button>Edit Meal</button>
                                    <button onClick={(event) => handleDeleteMeal(event, meal.id)}>Delete Meal</button>
                                </div>
                            </div>
                            <div className='mealDetails'>
                                {meal.dish[0] ? <RecipeCard meal={meal}/> : <h4>No Meals Added</h4>}
                            </div>

                        </div>
                    );
                }
            })}
        </div>
     );
}
 
export default MealCard;