import React,{useState} from 'react'
import SeriesCardSection from '../../Components/SeriesCardSection/SeriesCardSection'
import { SeriesData } from '../../data/SeriesData'
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Series.css";

function Series() {
  const [query,setQuery] = useState('');
  const search = (data) => {
    return data.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()))
  }
  return (
    <div className='Series'>
      <div className='Series-search'>
        <Link to="/home">
        <FaHome className='home-button'/>
        </Link>
        <input 
            className='input-bar'
            type="text"
            placeholder='Series...'
            onChange={(e) => setQuery(e.target.value)}
            />
      </div>
      <div className='Series-data'>
        <SeriesCardSection SeriesData={search(SeriesData)} />
      </div>
    </div>
  )
}

export default Series