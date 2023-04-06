import React, { useState, useEffect } from 'react';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';

const DisplayMealsPage = (props) => {
    return ( 
        <div className="mealsContainer">
            <HomeNavbar />
            <div>
                <p>See MyMeals Page</p>
            </div>
        </div>
     );
}
 
export default DisplayMealsPage;