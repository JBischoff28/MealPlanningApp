import React from 'react';
import { Link } from 'react-router-dom';

const RandomResult = (props) => {
    
    function editURI(recipe) {
        let recipeId = recipe.recipe.uri.substr(44);
        return recipeId;
    }

    return ( 
        <div className='generatedContainer'>
            <img src={props.generated.recipe.images.REGULAR.url} alt='food'/>
            <h3>{props.generated.recipe.label}</h3>
            <Link to={`/recipe/${editURI(props.generated)}`}>
                <p>View Recipe</p>
            </Link>
        </div>
     );
}
 
export default RandomResult;