import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './PlannedMealsPage.css';
import AddEventForm from '../../components/AddEventForm/AddEventForm';


const PlannedMealsPage = () => {

    const [events, setEvents] = useState([]);
    let today = new Date().toISOString().replace(/T.*$/, '');
    console.log(today);

    function handleDateSelect(selectInfo) {
        let title = prompt('Please enter a new title for your event');
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            });
        }
    }

    function handleClick(clickInfo) {
        if (window.confirm('Are you sure you want to delete this event?')) {
            clickInfo.event.remove();
        }
    }

    return (
        <div className='plannedMealsContainer'>
            <HomeNavbar />
            <AddEventForm setEvents={setEvents} events={events}/>
            <div className='calendar'>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'dayGridMonth, timeGridWeek',
                        center: 'title',
                        right: 'prev, next'
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    events={events}
                    select={handleDateSelect}
                    eventContent={null}
                    eventClick={handleClick}
                />
            </div>
        </div>
    );
}

export default PlannedMealsPage;