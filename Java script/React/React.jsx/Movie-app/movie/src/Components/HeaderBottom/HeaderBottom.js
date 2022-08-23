import React from 'react'
import {Link} from 'react-router-dom'
import "./HeaderBottom.css"

function HeaderBottom() {
  return (
    <div className='container-bottom'>
      <div className='header-bottom'>
        <div className='section'> 
        <Link to="/movies" style={{textDecoration: "none",color:'white'}}>
        <div className='color'>Movies</div>
        </Link>
        <Link to="/series" style={{textDecoration: "none",color:'white'}}>
        <div className='color'>TV shows</div>
        </Link>
        <Link to="/find" style={{textDecoration: "none",color:'white'}}>
        <div className='color'>Find us</div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom