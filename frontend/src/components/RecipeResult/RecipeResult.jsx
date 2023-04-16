import { Link } from "react-router-dom";
import './RecipeResult.css';

const RecipeResult = ({ recipes }) => {

    function editURI(recipe) {
        let recipeId = recipe.recipe.uri.substr(44);
        return recipeId;
    }

    function roundNum(calories) {
        let caloriesCount = Math.round(calories);
        return caloriesCount;
    }

    return (
        <div className="resultsContainer">
            {recipes.map((recipe) => {
                if (recipe.recipe) {
                    return (
                        <div className="result" key={recipe.recipe.uri}>
                            <div className="resultCard">
                                <img src={recipe.recipe.images.SMALL.url} alt="food" />
                                <div className="recipeBasic">
                                    <h4>{recipe.recipe.label}</h4>
                                    <p>Meal Type: {recipe.recipe.mealType}</p>
                                    <p>Dish Type: {recipe.recipe.dishType}</p>
                                    <p>Cuisine Type: {recipe.recipe.cuisineType}</p>
                                </div>
                                <hr />
                                <div className="rightSide">
                                    <p>Calorie Count: {roundNum(recipe.recipe.calories)}</p>
                                    <Link id='viewLink' to={`/recipe/${editURI(recipe)}`}>
                                        <p>View Recipe</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default RecipeResult;