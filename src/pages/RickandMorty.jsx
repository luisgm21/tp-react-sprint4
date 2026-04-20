import axios from 'axios'
import {useState,useEffect , useCallback} from 'react'

import { API_CONFIG } from '../config/env'
import SearchBar from '../components/featureAPI/SearchBar'
import { data } from 'react-router-dom'
import CharacterCard from '../components/featureAPI/CharacterCard'



const RickandMorty = () => {
  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const fetchData =  useCallback(async () => {
          try {
            if(searchTerm.length > 0) {
              const { data } = await axios.get(`${API_CONFIG.RICKANDMORTY_CHARACTERS_API_URL}?name=${searchTerm}`)
              setCharacters(data.results)
              return
            } else {
              const { data } = await axios.get(API_CONFIG.RICKANDMORTY_CHARACTERS_API_URL)
              setCharacters(data.results)
            }

          } catch (error) {
            console.error('Error fetching data:', error)
          }
}, [searchTerm])
    
    useEffect(() => {
      fetchData()
    }, [fetchData])

  return (
    <section className="mx-auto w-full max-w-6xl space-y-8">
      <h1>Rick and Morty</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
          />
        ))}
      </div>
    </section>
  )
}

export default RickandMorty