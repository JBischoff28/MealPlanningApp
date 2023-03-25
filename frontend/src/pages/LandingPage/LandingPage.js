import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from '../../context/AuthContext';


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
        <div>
            <t1>This will be the landing page!</t1>
        </div>
     );
}
 
export default LandingPage;