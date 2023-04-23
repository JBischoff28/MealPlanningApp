import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const EditMealNameForm = (props) => {

    const [user, token] = useAuth();
    const [newName, setNewName] = useState('');

    async function editMealName() {
        try {
            let response = await axios.put(`http://127.0.0.1:8000/api/meals/mymeal/${props.meal.id}/`, {
                name: `${newName}`
            },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                });
                console.log(response.status);
                setTimeout(1000, props.getMeal());
        } catch (error) {
            console.log(error);
        }
    }

    function handleNameChange(event) {
        event.preventDefault();
        editMealName();
        
    }

    return (
        <form className='mealNameForm' onSubmit={(event) => handleNameChange(event)}>
            <label>Change Meal Name?</label>
            <input type='text' placeholder='Enter new name!' value={newName} onChange={(event) => setNewName(event.target.value)} />
            <button id='changeFormBtn' type='submit'>Submit New Name!</button>
        </form>
    );
}

export default EditMealNameForm;