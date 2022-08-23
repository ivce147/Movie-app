import React,{useState} from 'react'
import MovieCardSection from '../../Components/MovieCardSection/MovieCardSection'
import { MovieData } from '../../data/MovieData'
import { MovieCategories } from '../../constants/MovieCategories'
import { Link } from "react-router-dom";
import "./Drama.css";
import { FaHome } from 'react-icons/fa';

function Drama() {
  const [query,setQuery] = useState('');
  const DramaMovies = MovieData.filter(movie => movie.category === MovieCategories.Drama)
  const search = (dramaMovies) => {
    return dramaMovies
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
            placeholder='Drama...'
            onChange={(e) => setQuery(e.target.value)}
            />
      </div>
      <div className='movies-data'>
        <MovieCardSection movieData={search(DramaMovies)} />
      </div>
    </div>
  )
}

export default Drama