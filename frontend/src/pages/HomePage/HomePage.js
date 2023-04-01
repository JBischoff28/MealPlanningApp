import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar.jsx";
import axios from "axios";
import { app_id, app_key } from "../../../src/localKey";
import "./HomePage.css";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    /**fetchRecipes();**/
  }, []);

  async function fetchRecipes() {
    try {
      let response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=well%20rounded&app_id=${app_id}&app_key=${app_key}&random=true`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="homeContainer">
      <HomeNavbar />
      <div className="homePageBody">
        <p>this is the home page.</p>
        <button onClick={fetchRecipes}>Run Test - fetchRecipes</button>
      </div>
    </div>
  );
};

export default HomePage;
