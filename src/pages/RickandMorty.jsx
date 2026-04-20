import axios from 'axios'
import {useState,useEffect , useCallback} from 'react'

import { API_CONFIG } from '../config/env'
import SearchBar from '../components/featureAPI/SearchBar'
import { data } from 'react-router-dom'
import CharacterCard from '../components/featureAPI/CharacterCard'
import { toast } from 'react-toastify'



const RickandMorty = () => {
  const [characters, setCharacters] = useState([])
  // Leer el término de búsqueda desde localStorage al iniciar
  const getInitialSearchTerm = () => {
    try {
      return localStorage.getItem('searchTerm') || '';
    } catch {
      return '';
    }
  };
  const [searchTerm, setSearchTerm] = useState(getInitialSearchTerm());
  // Guardar el término de búsqueda en localStorage cada vez que cambie
  useEffect(() => {
    try {
      localStorage.setItem('searchTerm', searchTerm);
    } catch {}
  }, [searchTerm]);

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
            console.log(error);
            if (error.response) {
              // El servidor respondió con un status fuera del rango 2xx
              const mensaje = error.response.data?.error || error.response.data?.message || 'Error en la respuesta del servidor';
              toast.error(`Codigo: ${error.response.status} - ${mensaje}`);
            } else if (error.request) {
              // La petición fue hecha pero no hubo respuesta
              toast.error('No hubo respuesta del servidor');
            } else {
              // Otro tipo de error
              toast.error('Error: ' + error.message);
            }
            setCharacters([]);
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
            location={character.location?.name || 'Unknown'}
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