import React, { useState } from 'react';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import axios from 'axios';
import { app_id, app_key } from '../../../src/localKey';

const ChooseForMePage = () => {

    const [randomRecipes, setRandomRecipes] = useState([]);
    const [keywords, setKeywords] = useState('');
    const [generated, setGenerated] = useState();

    async function getRandomRecipes(keywords) {
        try {
            let response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${keywords}&app_id=${app_id}&app_key=${app_key}`);
            setRandomRecipes(response.data.hits);
        } catch (error) {
            console.log(error);
        }
    }

    function returnRandomRecipe(randomRecipes) {
        let item = randomRecipes[Math.floor(Math.random() * randomRecipes.length)];
        setGenerated(item);
    }

    function handleSubmit(event) {
        event.preventDefault();
        getRandomRecipes(keywords).then(returnRandomRecipe(randomRecipes));
    }

    return (
        <div className='chooseContainer'>
            <HomeNavbar />
            <form className='inputBar' onSubmit={(event) => handleSubmit(event)}>
                <label>What kind of food do you feel like eating?</label>
                <input type='text' placeholder='Give us keywords!' value={keywords} onChange={(event) => setKeywords(event.target.value)} />
                <button type='submit'>GO!</button>
            </form>
            <div className='randomResult'>
                {generated ? <p>{generated.recipe.label}</p> : <p>Press Go</p>}
            </div>
        </div>
    );
}

export default ChooseForMePage;