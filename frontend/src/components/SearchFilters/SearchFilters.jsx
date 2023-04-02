import React, { useState, useEffect } from 'react';


const SearchFilters = (props) => {

    const [mealType, setMealType] = useState('');
    const [dishType, setDishType] = useState('');
    const [isBalanced, setIsBalanced] = useState(false);
    const [isFiber, setIsFiber] = useState(false);
    const [isProtein, setIsProtein] = useState(false);
    const [isCarb, setIsCarb] = useState(false);
    const [isFat, setIsFat] = useState(false);
    const [isSodium, setIsSodium] = useState(false);


    return ( 
        <div className='filtersContainer'>
            <form className='filtersBody'>
                <div className='mealType'>
                    <label>Choose a Meal Type:</label>
                    <select name='mealType' id='mealOptions'>
                        <option value='breakfast'>Breakfast</option>
                        <option value='brunch'>Brunch</option>
                        <option value='lunch/dinner'>Lunch/Dinner</option>
                        <option value='snack'>Snack</option>
                        <option value='teatime'>Tea Time</option>
                    </select>
                </div>
                <div className='dishType'>
                    <label>Choose a Dish Type:</label>
                    <select name='dishType' id='dishOptions'>
                        <option value='alcohol cocktail'>Alcohol Cocktail</option>
                        <option value='biscuits and cookies'>Biscuits and Cookies</option>
                        <option value='bread'>Bread</option>
                        <option value='cereals'>Cereals</option>
                        <option value='condiments and sauces'>Condiments and Sauces</option>
                        <option value='desserts'>Desserts</option>
                        <option value='drinks'>Drinks</option>
                        <option value='eggs'>Eggs</option>
                        <option value='ice cream and custard'>Ice Cream and Custard</option>
                        <option value='main course'>Main Course</option>
                        <option value='pancake'>Pancakse</option>
                        <option value='pasta'>Pasta</option>
                        <option value='pastry'>Pastry</option>
                        <option value='pies and tarts'>Pies and Tarts</option>
                        <option value='pizza'>Pizza</option>
                        <option value='preps'>Preps</option>
                        <option value='preserve'>Preserve</option>
                        <option value='salad'>Salad</option>
                        <option value='sandwiches'>Sandwiches</option>
                        <option value='seafood'>Seafood</option>
                        <option value='side dish'>Side Dish</option>
                        <option value='soup'>Soup</option>
                        <option value='special occasions'>Special Occasions</option>
                        <option value='starter'>Starter</option>
                        <option value='sweets'>Sweets</option>
                    </select>
                </div>
                <div className='dietsToggle'>
                    <label>Balanced</label>
                    <input type='checkbox' id='balancedToggle' />
                    <label>High-Fiber</label>
                    <input type='checkbox' id='fiberToggle' />
                    <label>High-Protein</label>
                    <input type='checkbox' id='proteinToggle' />
                    <label>Low-Carb</label>
                    <input type='checkbox' id='carbToggle' />
                    <label>Low-Fat</label>
                    <input type='checkbox' id='fatToggle' />
                    <label>Low-Sodium</label>
                    <input type='checkbox' id='sodiumToggle' />
                </div>
            </form>
        </div>
     );
}
 
export default SearchFilters;