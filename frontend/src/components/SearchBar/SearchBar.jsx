import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { app_id, app_key } from '../../localKey';

const SearchBar = (props) => {

    const [search, setSearch] = useState("");
    
    async function searchRecipes(search) {
        try {
            let response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${app_id}&app_key=${app_key}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <form>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </form>
     );
}
 
export default SearchBar;