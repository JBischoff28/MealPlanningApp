import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "../NavBar/NavBar.css";
import "../HomeNavbar/HomeNavbar.css";

const HomeNavbar = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();

    return ( 
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <div id="homeNavText">
              <b>mealCONTROL</b>
            </div>
          </Link>
          <div className="userWelcome">
            {user ? (
              <b style={{ textAlign: "center" }}>Welcome: {user.username}</b>
            ) : (
              <b>{}</b>
            )}
          </div>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login / Register</button>
          )}
        </li>
      </ul>
    </div>
     );
}
 
export default HomeNavbar;