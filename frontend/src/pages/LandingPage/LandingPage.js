import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from '../../context/AuthContext';
import Navbar from '../../components/NavBar/NavBar';
import './LandingPage.css';


const LandingPage = (props) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/home");
        }
        else {}
    })

    return (
        <div className='landingContainer'>
            <Navbar />
            <div className='pageBody'>
                <div className='container'>
                    <div className='headerContainer'>
                        <div className='headerText'>
                            <h2>What is mealCONTROL?</h2>
                        </div>
                    </div>
                </div>
                <div className='aboutSection'>
                    <ul>
                        <li>
                            <div className='aboutContainer'>
                            </div>
                        </li>
                        <li>
                            <div className='aboutContainer'>
                            </div>
                        </li>
                        <li>
                            <div className='aboutContainer'>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default LandingPage;