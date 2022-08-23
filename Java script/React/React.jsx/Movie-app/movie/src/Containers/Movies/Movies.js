import React,{useState} from 'react'
import MovieCardSection from '../../Components/MovieCardSection/MovieCardSection'
import { MovieData } from '../../data/MovieData'
import { Link } from "react-router-dom";
import "./Movies.css";
import { FaHome } from 'react-icons/fa';

function Movies() {
  const [query,setQuery] = useState('');
  const search = (data) => {
    return data.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()))
  }
  return (
    <div className='movies'>
      <div className='movie-search'>
        <Link to="/home">
        <FaHome className='home-button'/>
        </Link>
        <input 
            className='input-bar'
            type="text"
            placeholder='Movie...'
            onChange={(event) => setQuery(event.target.value)}
            />
      </div>
      <div className='movies-data'>
        <MovieCardSection movieData={search(MovieData)} />
      </div>
    </div>
  )
}

export default Movies