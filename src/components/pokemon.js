import React from 'react';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {
    
    const { pokemon } = props;

    
    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="pokemon-img"
                />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>No: {pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">
                                    {type.type.name}
                                </div>
                            );
                            })}
                    </div>
                    <div>
                        <Link to={"/pokemon/" + pokemon.name } ><button className="pokemon-btn-detail"> View Pokemon </button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;