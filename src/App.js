import React from 'react';
import './styles.css';
import Navbar from './components/navbar';
import {Link} from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
      <div className="app-links">
          <h1 className="title-welcome">Welcome to the Pokedex!</h1>
          <Link to='/elements' className="link"> Elements </Link> <br/>
          <Link to='/ElementsComparation' className="link"> Elements Compararion </Link> <br/>
      </div>
    </div>
  );
}

export default App;
