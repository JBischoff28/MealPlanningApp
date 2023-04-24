import React from 'react';

const DisplaySavedRecipes = (props) => {
    return ( 
        <div className='recipeList'>
        {props.myRecipes.map((recipe) => {
            if(recipe) {
                return (
                    <div className='recipe' key={recipe.id}>
                        <div>{recipe.id ? <p>Recipe Id: {recipe.id}</p> : <p>LOADING...</p>}</div>
                    </div>
                );
            }
        })}
    </div>
     );
}
 
export default DisplaySavedRecipes;