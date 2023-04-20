import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const CreateMealForm = (props) => {

    const [user, token] = useAuth();
    const [newName, setNewName] = useState('');

    function handleAddMeal(event) {
        event.preventDefault();
        addMeal();
        props.getUserMeals();
    }

    async function addMeal() {
        try {
            let request = await axios.post('http://127.0.0.1:8000/api/meals/mymeals/', {
                name: `${newName}`
            }, 
            {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            console.log(request.status);
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <form className='formContainer' onSubmit={(event) => handleAddMeal(event)}>
            <h3>Create a new meal!</h3>
            <div className='formInput'>
                <label>Meal Name: </label>
                <input type='text' value={newName} onChange={(event) => setNewName(event.target.value)} />
            </div>
            <button type='submit'>Create!</button>
        </form>
     );
}
 
export default CreateMealForm;