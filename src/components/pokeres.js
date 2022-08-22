import React from 'react';
import Pokemon from './Pokemon';

const Pokeres = (props) => {

    const {pokemons} = props;

    return (
        <div>
            <div className="header">
                <h1>Pokemones</h1>
                <div>pagination</div>
            </div>
            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                })}
            </div>
        </div>
    );
};

export default Pokeres;