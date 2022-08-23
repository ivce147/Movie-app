import React, { useState } from "react";
import "./HeaderTop.css";
import instagram from "../../Assets/Icons/instagram.gif";
import facebook from "../../Assets/Icons/facebook.gif";
import linkedin from "../../Assets/Icons/linkedin.gif";
import movies from "../../Assets/Icons/movies.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function HeaderTop() {
  const [click, setClick] = useState(false);

  const showDropdown = () => {
    setClick(true);
  };
  const hideDropdown = () => {
    setClick(false);
  };

  return (
    <div className="top-container">
      <div className="header-top">
        <div className="left">
          <Link to="/home">
            <img className="logo" src={movies} alt="movies" />
          </Link>
        </div>
        <div className="center">Movie app</div>
        <div className="right">
          <div
            className="burger"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            {click ? (
              <div className="drop-links">
                <FaTimes className="fa-times" />
                <div className="pointer">
                  <Link to="/action" className="component">
                    <div className="color">Action</div>
                  </Link>
                  <Link to="/animation" className="component">
                    <div className="color">Animation</div>
                  </Link>
                  <Link to="/comedy" className="component">
                    <div className="color">Comedy</div>
                  </Link>
                  <Link to="/crime" className="component">
                    <div className="color">Crime</div>
                  </Link>
                  <Link to="/drama" className="component">
                    <div className="color">Drama</div>
                  </Link>
                  <Link to="/horror" className="component">
                    <div className="color">Horror</div>
                  </Link>
                  <Link to="/login" className="component">
                    <div className="login color">Login</div>
                  </Link>
                </div>
              </div>
            ) : (
              <FaBars className="fa-bars" />
            )}
            <div className="icons">
              <a href="https://www.instagram.com/">
                <img className="icon" src={instagram} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/home.php">
                <img className="icon" src={facebook} alt="facebook" />
              </a>
              <a href="https://www.linkedin.com/feed/">
                <img className="icon" src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
