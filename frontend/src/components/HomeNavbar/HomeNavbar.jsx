import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "../NavBar/NavBar.css";

const HomeNavbar = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();

    return ( 
        <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <b>mealCONTROL</b>
          </Link>
          <div className="userWelcome">
            {user ? (
              <b style={{ textAlign: "center"}}>Welcome: {user.username}</b>
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