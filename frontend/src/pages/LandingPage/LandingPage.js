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
        else { }
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
                                            <hr />
                                        </li>
                                        <li>
                                            <p id='lowerText'>You give us keywords, we give you meals!</p>
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
                                <div className='aboutText'>
                                    <ul>
                                        <li>
                                            <p>Want more than one dish in your meal?</p>
                                        </li>
                                        <li>
                                            <p>With AltiMeal, you can send multiple recipes to our meal builder</p>
                                        </li>
                                        <li>
                                            <hr />
                                        </li>
                                        <li>
                                            <p id='lowerText'>Never struggle keeping track of all the tasty dishes you want to make again!</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='aboutContainer'>
                                <div className='aboutTitle'>
                                    <h2>Date Your Meals</h2>
                                </div>
                                <div className='aboutText'>
                                    <ul>
                                        <li>
                                            <p>When will you cook your meals?</p>
                                        </li>
                                        <li>
                                            <p>AltiMeal gives you the freedom to not only build a meal, but to plan it on our in-app calendar</p>
                                        </li>
                                        <li>
                                            <hr />
                                        </li>
                                        <li>
                                            <p id='lowerText'>Easily keep track of when you want to cook each meal!</p>
                                        </li>
                                    </ul>
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