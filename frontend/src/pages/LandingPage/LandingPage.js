import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from '../../context/AuthContext';
import './LandingPage.css';


const LandingPage = (props) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/home");
        }
        else {
            {}
        }
    })

    return ( 
        <div className='landingContainer'>
            <div>
                <t1>This will be the landing page!</t1>
            </div>
        </div>
     );
}
 
export default LandingPage;