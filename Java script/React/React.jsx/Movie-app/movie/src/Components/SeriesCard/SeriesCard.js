import React from "react";
import useCollapse from "react-collapsed";
import ScrollToTop from "react-scroll-to-top";
import "./SeriesCard.css";

export default function SeriesCard(props) {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const onOpenImg = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  const { id, name, videoUrl, img, category, released, audio, details } = props;
  const handleClick = (id) => {
    console.log(id);
  };
  console.log(img);
  return (
    <div onClick={() => handleClick(id)} className="card">
    <div className="cart">
        <div className="cart-image">
          {img && (
            <img
              className="pic"
              onClick={() => onOpenImg(videoUrl)}
              src={require(`../../Assets/Images/series/${img}.jpg`)}
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
              {isExpanded ? "Show less" : "Show more"}
            </button>
            <section {...getCollapseProps()}>{details}</section>
          
        </div>
      </div>
      <ScrollToTop smooth />
    </div>
  );
}
