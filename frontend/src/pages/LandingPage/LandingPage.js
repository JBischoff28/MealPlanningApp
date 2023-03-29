import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from '../../context/AuthContext';
import Navbar from '../../components/NavBar/NavBar';
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
                <Navbar />
            </div>
            <div className='mask' />
        </div>
     );
}
 
export default LandingPage;