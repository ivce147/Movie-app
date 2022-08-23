import React,{useState} from 'react'
import MovieCardSection from '../../Components/MovieCardSection/MovieCardSection'
import { MovieData } from '../../data/MovieData'
import { MovieCategories } from '../../constants/MovieCategories'
import { Link } from "react-router-dom";
import "./Animation.css";
import { FaHome } from 'react-icons/fa';

function Animation() {
  const [query,setQuery] = useState('');
  const animationMovies = MovieData.filter(movie => movie.category === MovieCategories.Animation)
  const search = (animationMovies) => {
    return animationMovies
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
            placeholder='Animation...'
            onChange={(e) => setQuery(e.target.value)}
            />
      </div>
      <div className='movies-data'>
        <MovieCardSection movieData={search(animationMovies)} />
      </div>
    </div>
  )
}

export default Animation