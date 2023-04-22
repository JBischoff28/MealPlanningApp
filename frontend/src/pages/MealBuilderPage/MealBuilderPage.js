import React, { useState, useEffect } from 'react';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import EditRecipeCard from '../../components/EditRecipeCard/EditRecipeCard';
import './MealBuilderPage.css';


const MealBuilderPage = () => {

    const [user, token] = useAuth();
    const { mealId } = useParams();
    const [meal, setMyMeal] = useState({});

    useEffect(() => {
        getMeal();
    }, []);

    async function getMeal() {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/meals/mymeal/${mealId}/`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            console.log(response.data);
            setMyMeal(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    
    return ( 
        <div className='mealBuilderContainer'>
            <HomeNavbar />
            <div className='builderBody'>
                <div className='mealCard'>
                    <div className='mealHeaders'>
                        <h3>{meal.name}</h3>
                    </div>
                    <div className='dishes'>
                        {meal.dish ? <EditRecipeCard meal={meal} /> : <h2>LOADING...</h2>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MealBuilderPage;