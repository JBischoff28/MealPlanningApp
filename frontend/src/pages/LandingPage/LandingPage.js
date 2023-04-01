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
                <div className='headerContainer'>
                    <div className='headerText'>
                        <h2>What is mealCONTROL?</h2>
                    </div>
                </div>
                <div className='aboutSection'>
                    <ul>
                        <li>
                            <div className='aboutContainer'>
                                <div className='aboutTitle'>
                                    <h2>Easy Decisions</h2>
                                </div>
                                <div className='aboutText'>
                                    <ul>
                                        <li>
                                            <p>Let us help you decide what to eat!</p>
                                        </li>
                                        <li>
                                            <p>mealCONTROL helps speed up the decision making process by giving you meal suggestions</p>
                                        </li>
                                        <li>
                                            <p>You give us keywords, we give you meals!</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='aboutContainer'>
                                <div className='aboutTitle'>
                                    <h2>Meal Builder</h2>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='aboutContainer'>
                                <div className='aboutTitle'>
                                    <h2>Date Your Meals</h2>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <button id='bigRegButton' onClick={() => navigate("/register")}>REGISTER TODAY!!!</button>
            </div>
        </div>
     );
}
 
export default LandingPage;