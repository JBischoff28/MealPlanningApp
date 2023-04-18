import React, { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './MealCard.css';


const MealCard = (props) => {

    return ( 
        <div className="mealCardContainer">
            {props.mymeals.map((meal) => {
                if (meal) {
                    return (
                        <div className='meal' key={meal.id}>
                            <div className='mealDetails'>
                                <h3>{meal.name}</h3>
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