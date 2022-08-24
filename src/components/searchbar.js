import React from 'react';
import {searchPokemon} from '../api';
const {useState} = React;


const Searchbar = (props) => {

    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(null);
          }
    }

    const Onclick = async (e) => {
        onChange(search);
    }

    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input 
                    type="text" 
                    placeholder="Search Pokemon..." 
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