import React, { useState, useEffect } from 'react';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import MealCard from '../../components/MealCard/MealCard';

const DisplayMealsPage = (props) => {

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
            console.log(response.data);
            setMyMeals(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div className="mealsContainer">
            <HomeNavbar />
            <div className='mealsBody'>
                <MealCard mymeals={mymeals}/>
            </div>
        </div>
     );
}
 
export default DisplayMealsPage;