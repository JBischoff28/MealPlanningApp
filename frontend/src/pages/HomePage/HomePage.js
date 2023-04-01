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
  /*const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", { ------------------> EXAMPLE
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]); */


  return (
    <div className="homeContainer">
      <HomeNavbar />
      <div className="homePageBody">
        <p>this is the home page.</p>
      </div>
    </div>
  );
};

export default HomePage;
