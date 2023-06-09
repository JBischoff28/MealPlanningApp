import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar.jsx";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import RecipeResult from "../../components/RecipeResult/RecipeResult";
import axios from "axios";
import { app_id, app_key } from "../../../src/localKey";
import "./HomePage.css";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [recipes, setRecipes] = useState([]);
  const [globalSearch, setGlobal] = useState("");

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    try {
      let response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=well%20rounded&app_id=${app_id}&app_key=${app_key}&random=true`);
      console.log(response.data.hits);
      setRecipes(response.data.hits);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="homeContainer">
      <HomeNavbar />
      <div className="homePageBody">
        <div className="searchFilters">
          <SearchFilters recipes={recipes} setRecipes={setRecipes} search={globalSearch}/>
        </div>
        <div className="searchBar">
          <SearchBar setRecipes={setRecipes} setGlobal={setGlobal} />
          <button id='resetBtn' onClick={(event) => fetchRecipes(event)}>Reset Search</button>
        </div>
        <div className="searchResults">
            <RecipeResult recipes={recipes} />
          </div>
      </div>
    </div>
  );
};

export default HomePage;
