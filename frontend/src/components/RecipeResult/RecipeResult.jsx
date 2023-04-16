import { Link } from "react-router-dom";
import './RecipeResult.css';

const RecipeResult = ({ recipes }) => {

    function editURI(recipe) {
        let recipeId = recipe.recipe.uri.substr(44);
        return recipeId;
    }

    return ( 
        <div className="resultsContainer">
            {recipes.map((recipe) => {
                if (recipe.recipe) {
                    return (
                        <div className="result" key={recipe.recipe.uri}>
                            <Link to={`/recipe/${editURI(recipe)}`}>
                                <div className="resultCard">
                                    <img src={recipe.recipe.images.SMALL.url} alt="food"/>
                                    <p>{recipe.recipe.label}</p>
                                </div>
                            </Link>
                            <hr/>
                        </div>
                    )
                }
            })}
        </div>
     );
}
 
export default RecipeResult;