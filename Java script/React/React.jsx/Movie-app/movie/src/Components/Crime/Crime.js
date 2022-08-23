import React,{useState} from 'react'
import MovieCardSection from '../../Components/MovieCardSection/MovieCardSection'
import { MovieData } from '../../data/MovieData'
import { MovieCategories } from '../../constants/MovieCategories'
import { Link } from "react-router-dom";
import "./Crime.css";
import { FaHome } from 'react-icons/fa';

function Crime() {
  const [query,setQuery] = useState('');
  const crimeMovies = MovieData.filter(movie => movie.category === MovieCategories.Crime)
  const search = (crimeMovies) => {
    return crimeMovies
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
            placeholder='Crime...'
            onChange={(e) => setQuery(e.target.value)}
            />
      </div>
      <div className='movies-data'>
        <MovieCardSection movieData={search(crimeMovies)} />
      </div>
    </div>
  )
}

export default Crime