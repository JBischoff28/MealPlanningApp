import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { app_id, app_key } from '../../localKey';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import axios from 'axios';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo.jsx';
import './RecipePage.css';

const RecipePage = () => {

    const { recipeId } = useParams();
    const [thisRecipe, setThisRecipe] = useState([]);

    useEffect(() => {
        GetRecipe();
    }, []);

    async function GetRecipe() {
        try {
            let response = await axios.get(`https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${app_id}&app_key=${app_key}`);
            console.log(response.data);
            setThisRecipe(response.data);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='recipePageContainer'>
            <HomeNavbar />
            <div className='recipeBody'>
                {thisRecipe.recipe ? <RecipeInfo thisRecipe={thisRecipe} /> : <h2>LOADING...</h2>}
                <div className='backBtn'>
                    <Link id='back' to={'/home'}>Back</Link>
                </div>
            </div>
        </div>
    );
}

export default RecipePage;