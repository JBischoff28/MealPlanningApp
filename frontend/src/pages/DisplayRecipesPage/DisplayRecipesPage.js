import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import './DisplayRecipesPage.css';

const DisplayRecipesPage = () => {

    const [user, token] = useAuth();
    const [myRecipes, setMyRecipes] = useState([]);

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

    return ( 
        <div className="displayRecipesContainer">
            <HomeNavbar />
            <div className='savedRecipesContainer'>
                <div className='singleRecipe'>
                    {myRecipes.map((recipe) => {
                        if(recipe) {
                            return (
                                <div className='recipe' key={recipe.id}>
                                    <div>{recipe.id ? <p>Recipe Id: {recipe.id}</p> : <p>LOADING...</p>}</div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default DisplayRecipesPage;