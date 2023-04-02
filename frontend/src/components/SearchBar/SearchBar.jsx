import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { app_id, app_key } from '../../localKey';

const SearchBar = ({ setRecipes }) => {

    const [search, setSearch] = useState("");
    
    async function searchRecipes(search) {
        try {
            let response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${app_id}&app_key=${app_key}`);
            console.log(response.data);
            setRecipes(response.data.hits);
        } catch (error) {
            console.log(error);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(search);
        if (search !== '') {
            searchRecipes(search);
            setSearch('');
        }
        else {
            console.log("Input required!");
            alert("Input is required to search!");
        }

    }

    return ( 
        <form onSubmit={(event) => handleSubmit(event)}>
            <ul>
                <li>
                    <input placeholder='Search for recipes...' type='text' value={search} onChange={(event) => setSearch(event.target.value)} />
                </li>
                <li>
                    <button type='submit'>Search</button>
                </li>
            </ul>
        </form>
     );
}
 
export default SearchBar;