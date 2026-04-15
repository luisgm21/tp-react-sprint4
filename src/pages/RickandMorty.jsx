import axios from 'axios'
import { API_CONFIG } from '../config/env'

const RickandMorty = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(API_CONFIG.RICKANDMORTY_API_URL)
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  fetchData()

  return (
    <div>RickandMorty</div>
  )
}

export default RickandMorty