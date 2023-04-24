import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import './DisplayRecipesPage.css';
import DisplaySavedRecipes from '../../components/DisplaySavedRecipes/DisplaySavedRecipes';
import NothingToShow from '../../components/NothingToShow/NothingToShow';

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
            <div className='displayRecipesBody'>
                <h2>My Saved Recipes:</h2>
                {myRecipes[0] ? <DisplaySavedRecipes myRecipes={myRecipes} /> : <NothingToShow />}
            </div>
        </div>
     );
}
 
export default DisplayRecipesPage;