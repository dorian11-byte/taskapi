import React from 'react';
import './styles.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Pokeres from './components/pokeres';
import {getPokemons} from './api';

const {useState, useEffect} = React; 

function App() {

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results);
    }catch(e) {

    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);
  return (

    <div>
      <Navbar />
      <div className="App">
          <Searchbar />
          <Pokeres  pokemons={pokemons}/>
      </div>
    </div>
  );
}

export default App;
