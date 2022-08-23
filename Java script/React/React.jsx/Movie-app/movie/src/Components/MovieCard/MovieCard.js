import React from "react";
import useCollapse from "react-collapsed";
import ScrollToTop from "react-scroll-to-top";
import "./MovieCard.css";

export default function MovieCard(props) {//Destructuring
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const onOpenImg = (videoUrl) => {
    window.open(videoUrl, "_blank");
    //Global object
  };

  const { name, videoUrl, img, category, released, audio, details } = props;
 
  return (
    <div className="card">
      <div className="cart">
        <div className="cart-image">
          {img && (//Renderiranje so uslov
            <img
              className="pic"
              onClick={() => onOpenImg(videoUrl)}
              src={require(`../../Assets/Images/movie/${img}.jpg`)}
              alt={name}
            />
          )}
        </div>
        <div className="cart-text">
          <div>{name}</div>
          <div>{category}</div>
          <div>{released}</div>
          <div>{audio}</div>
          
            <button className="btn" {...getToggleProps()}>
              {isExpanded ? <div className="width">Show less</div> : <div className="width">Show more</div>}
            </button>
            <section {...getCollapseProps()}>{details}</section>
          
        </div>
      </div>
      <div className="scroll">
      <ScrollToTop smooth />
      </div>
    </div>
  );
}
