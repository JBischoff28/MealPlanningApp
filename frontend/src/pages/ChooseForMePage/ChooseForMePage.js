import React, { useState } from 'react';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import axios from 'axios';
import { app_id, app_key } from '../../../src/localKey';

const ChooseForMePage = () => {

    const [randomRecipes, setRandomRecipes] = useState([]);

    async function randomRecipe(search) {
        try {
            let response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${app_id}}&app_key=${app_key}&random=true`);
            console.log(response.data);
            setRandomRecipes(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    function returnRandomRecipe() {
        let item = randomRecipes[Math.floor(Math.random()*randomRecipes.length)];
    }

    return ( 
        <div className='chooseContainer'>
            <HomeNavbar />
            <form className='inputBar'>
                <label></label>
                <input />
                <button></button>
            </form>
            <div className=''></div>
            <div className='randomResult'></div>
        </div>
     );
}
 
export default ChooseForMePage;