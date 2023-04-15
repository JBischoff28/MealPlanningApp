import React, { useState } from 'react';
import './SearchFilters.css';
import { app_id, app_key } from '../../localKey';
import axios from 'axios';


const SearchFilters = (props) => {

    const [mealType, setMealType] = useState('');
    const [dishType, setDishType] = useState('');
    const [dietType, setDietType] = useState('');
    const [cuisineType, setCuisineType] = useState('');


    async function applyFilters() {
        try {
            let response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${props.search}&app_id=${app_id}&app_key=${app_key}&mealType=${mealType}&dishType=${dishType}&cuisineType=${cuisineType}&diet=${dietType}`);
            props.setRecipes(response.data.hits);
        } catch (error) {
            console.log(error);
        }
    }

    function handleFilters(event) {
        event.preventDefault();
        applyFilters();
    }

    return (
        <div className='filtersContainer'>
            <form className='filtersBody' onSubmit={(event) => handleFilters(event)}>
                <div className='mealType'>
                    <label>Choose a Meal Type:</label>
                    <select name='mealType' id='mealOptions' onChange={(event) => setMealType(event.target.value)}>
                        <option defaultValue='none'>Select one...</option>
                        <option value='breakfast'>Breakfast</option>
                        <option value='brunch'>Brunch</option>
                        <option value='lunch/dinner'>Lunch/Dinner</option>
                        <option value='snack'>Snack</option>
                        <option value='teatime'>Tea Time</option>
                    </select>
                </div>
                <div className='dishType'>
                    <label>Choose a Dish Type:</label>
                    <select name='dishType' id='dishOptions' onChange={(event) => setDishType(event.target.value)}>
                        <option defaultValue='none'>Select one...</option>
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
                        <option value='pancake'>Pancake</option>
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
                <div className='cuisineType'>
                    <label>Choose a Cuisine Type:</label>
                    <select name='cuisineType' id='cuisineOptions' onChange={(event) => setCuisineType(event.target.value)}>
                        <option defaultValue='none'>Select one...</option>
                        <option value='american'>American</option>
                        <option value='asian'>Asian</option>
                        <option value='british'>British</option>
                        <option value='caribbean'>Caribbean</option>
                        <option value='central europe'>Central Europe</option>
                        <option value='chinese'>Chinese</option>
                        <option value='eastern europe'>Eastern Europe</option>
                        <option value='french'>French</option>
                        <option value='greek'>Greek</option>
                        <option value='indian'>Indian</option>
                        <option value='italian'>Italian</option>
                        <option value='japanese'>Japanese</option>
                        <option value='korean'>Korean</option>
                        <option value='kosher'>Kosher</option>
                        <option value='mediterranean'>Mediterranean</option>
                        <option value='mexican'>Mexican</option>
                        <option value='middle eastern'>Middle Eastern</option>
                        <option value='nordic'>Nordic</option>
                        <option value='south american'>South American</option>
                        <option value='south east asian'>South East Asian</option>
                        <option value='world'>World</option>
                    </select>
                </div>
                <div className='dietType'>
                    <label>Choose a Diet Type:</label>
                    <select name='dietType' id='dietOptions' onChange={(event) => setDietType(event.target.value)}>
                        <option defaultValue='none'>Select one...</option>
                        <option value='balanced'>Balanced</option>
                        <option value='high-fiber'>High-Fiber</option>
                        <option value='high-protein'>High-Protein</option>
                        <option value='low-carb'>Low-Carb</option>
                        <option value='low-fat'>Low-Fat</option>
                        <option value='low-sodium'>Low-Sodium</option>
                    </select>
                </div>
                <button id='dietsButton' type='submit'>Apply Filters</button>
            </form>
        </div>
    );
}

export default SearchFilters;