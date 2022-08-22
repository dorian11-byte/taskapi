import React from 'react';
import {searchPokemon} from '../api.js';
const {useState} = React;


const Searchbar = () => {

    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const Onclick = async() => {
        console.log('searching for pokemon');
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input 
                    type="text" 
                    placeholder="Search Pokemon" 
                    onChange={onChange}
                />
            </div>
            <div className="searchbar-button">
                <button onClick={Onclick}>Buscar</button>
            </div>  
        </div>
    );
};

export default Searchbar;