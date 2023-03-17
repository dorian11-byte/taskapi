import React from 'react'
import './styles.css'
import Navbar from './components/navbar'
import Searchbar from './components/searchbar'
import Pokeres from './components/pokeres'
import { getPokemons, getPokemonData } from './api'

const { useState, useEffect } = React

function Elements () {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(100)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
    } catch (e) {

    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='App'>
        <Searchbar />
        <Pokeres pokemons={pokemons} />
      </div>
    </div>
  )
}

export default Elements
