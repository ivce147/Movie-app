import React,{useState} from 'react'
import MovieCardSection from '../../Components/MovieCardSection/MovieCardSection'
import { MovieData } from '../../data/MovieData'
import { MovieCategories } from '../../constants/MovieCategories'
import { Link } from "react-router-dom";
import "./Horror.css";
import { FaHome } from 'react-icons/fa';

function Horror() {
  const [query,setQuery] = useState('');
  const horrorMovies = MovieData.filter(movie => movie.category === MovieCategories.Horror)
  const search = (horrorMovies) => {
    return horrorMovies
    .filter(item => 
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
            placeholder='Horror...'
            onChange={(e) => setQuery(e.target.value)}
            />
      </div>
      <div className='movies-data'>
        <MovieCardSection movieData={search(horrorMovies)} />
      </div>
    </div>
  )
}

export default Horror