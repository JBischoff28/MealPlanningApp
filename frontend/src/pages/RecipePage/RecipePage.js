import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { app_id, app_key } from '../../localKey';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const RecipePage = (props) => {

    const [user, token] = useAuth();
    const { recipeId } = useParams();
    const [thisRecipe, setThisRecipe] = useState([]);
    console.log(recipeId)
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

    async function saveRecipe(event) {
        event.preventDefault();
        try {
            let postRequest = await axios.post(`http://127.0.0.1:8000/api/dishes/mydishes/`,
                {
                    foodId: recipeId,
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

    return (
        <div className='recipePageContainer'>
            <HomeNavbar />
            <div className='recipeBody'>
                <p>See recipe Page!</p>
                <div className='saveRecipe'>
                    <button className='saveBtn' onClick={(event) => saveRecipe(event)}>Save this recipe!</button>
                </div>
                <div className='backBtn'>
                    <Link to={'/home'}>Back</Link>
                </div>
            </div>
        </div>
    );
}

export default RecipePage;