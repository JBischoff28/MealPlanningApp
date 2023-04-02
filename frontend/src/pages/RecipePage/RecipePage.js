import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { app_id, app_key } from '../../localKey';
import axios from 'axios';

const RecipePage = (props) => {
    
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
        <p>See recipe Page!</p>
     );
}
 
export default RecipePage;