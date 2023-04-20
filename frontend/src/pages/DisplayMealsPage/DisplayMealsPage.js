import React, { useState, useEffect } from 'react';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MealCard from '../../components/MealCard/MealCard';
import CreateMealForm from '../../components/CreateMealForm/CreateMealForm';
import './DisplayMealsPage.css';

const DisplayMealsPage = () => {

    const [user, token] = useAuth();
    const [mymeals, setMyMeals] = useState([]);

    useEffect(() => {
        getUserMeals();
    }, []);

    async function getUserMeals() {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/meals/mymeals/', {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            setMyMeals(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div className="mealsContainer">
            <HomeNavbar />
            <div className='mealsBody'>
                <div className='savedRecipesBtn'>
                    <Link to='/recipes'>Saved Recipes</Link>
                </div>
                <CreateMealForm getUserMeals={getUserMeals} mymeals={mymeals} setMyMeals={setMyMeals}/>
                {mymeals[0] ? <MealCard mymeals={mymeals}/> : <h1>Loading</h1>}
            </div>
        </div>
     );
}
 
export default DisplayMealsPage;