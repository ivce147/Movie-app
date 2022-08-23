import React,{useState} from 'react'
import MovieCardSection from '../../Components/MovieCardSection/MovieCardSection'
import { MovieData } from '../../data/MovieData'
import { MovieCategories } from '../../constants/MovieCategories'
import { Link } from "react-router-dom";
import "./Action.css";
import { FaHome } from 'react-icons/fa';

function Action() {
  const [query,setQuery] = useState('');
  const actionMovies = MovieData.filter(movie => movie.category === MovieCategories.ActionAndAdventure)
  const search = (actionMovies) => {//Function
    return actionMovies
    .filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()))//Definition
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
            placeholder='Action...'
            onChange={(event) => setQuery(event.target.value)}
            />
      </div>
      <div className='movies-data'>
        <MovieCardSection movieData={search(actionMovies)} />
      </div>
    </div>//MovieData kako props
  )
}

export default Action