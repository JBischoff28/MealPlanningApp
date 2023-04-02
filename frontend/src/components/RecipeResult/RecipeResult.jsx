import { Link } from "react-router-dom";

const RecipeResult = ({ recipes }) => {

    return ( 
        <div className="resultsContainer">
            {recipes.map((recipe) => {
                if (recipe.recipe) {
                    return (
                        <div className="result" key={recipe.recipe.uri}>
                            <Link to={`/${recipe.recipe.url}`}>
                                <div className="resultCard">
                                    <img src={recipe.recipe.images.THUMBNAIL}/>
                                </div>
                            </Link>
                        </div>
                    )
                }
            })}
        </div>
     );
}
 
export default RecipeResult;