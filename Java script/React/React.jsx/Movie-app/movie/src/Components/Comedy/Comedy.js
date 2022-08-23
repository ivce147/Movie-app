import React,{useState} from 'react'
import MovieCardSection from '../../Components/MovieCardSection/MovieCardSection'
import { MovieData } from '../../data/MovieData'
import { MovieCategories } from '../../constants/MovieCategories'
import { Link } from "react-router-dom";
import "./Comedy.css";
import { FaHome } from 'react-icons/fa';

function Comedy() {
  const [query,setQuery] = useState('');
  const comedyMovies = MovieData.filter(movie => movie.category === MovieCategories.Comedy)
  const search = (comedyMovies) => {
    return comedyMovies
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
            placeholder='Comedy...'
            onChange={(e) => setQuery(e.target.value)}
            />
      </div>
      <div className='movies-data'>
        <MovieCardSection movieData={search(comedyMovies)} />
      </div>
    </div>
  )
}

export default Comedy