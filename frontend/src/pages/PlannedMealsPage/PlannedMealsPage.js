import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import React, { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


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
        let confirmed = prompt("Enter 'Yes' to delete this planned meal.")
        if (confirmed === 'yes' || confirmed === 'Yes') {
            clickInfo.event.remove();
        }
        else {
            alert("Aborting deletion!");
        }
    }

    return (
        <div className='plannedMealsContainer'>
            <HomeNavbar />
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
                    events={[]}
                    select={handleDateSelect}
                    eventContent={null}
                    eventClick={handleClick}
                />
            </div>
            <form className='addEventForm'>

            </form>
        </div>
    );
}

export default PlannedMealsPage;