import React, { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';


const MealCard = (props) => {

    return ( 
        <div className="mealCardContainer">
            {props.mymeals.map((meal) => {
                if (meal) {
                    return (
                        <div className='meal' key={meal.id}>
                            <div className='mealDetails'>
                                <p>{meal.name}</p>
                                <div className='mealDishes'>
                                    <RecipeCard meal={meal}/>
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