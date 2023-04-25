import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import '../../pages/PlannedMealsPage/PlannedMealsPage.css';

const AddEventForm = (props) => {
    
    const [user, token] = useAuth();
    const [newEvent, setNewEvent] = useState({});

    useEffect(() => {
        fetchEvents();
    }, []);

    async function fetchEvents() {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/events/myevents/', {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            props.setEvents(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    /*async function addEvent() {
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/events/myevents/', {
                meal_id: 
            });
        } catch (error) {
            console.log(error)
        }
    }*/

    /*function handleSubmit(event) {
        event.preventDefault();
        tempEvent = {
            meal_id: 13,
            date: newEvent
        }
    }*/

    return ( 
        <form className='addEventForm'>
            <label>Add New Event!</label>
            <input placeholder='New Meal Title' type='text' />
            <input type='date' />
            <button id='addEventBtn' type='submit'>ADD!</button>
        </form>
     );
}
 
export default AddEventForm;