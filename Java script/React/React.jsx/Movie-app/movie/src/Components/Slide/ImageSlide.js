import React,{useState} from "react";
import { SlideData } from "../../data/SlideData";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import "./ImageSlide.css"

const ImageSlide = ({slides}) => {

    const onOpenImg = (videoUrl) => {
        window.open(videoUrl, "_blank");
      };
    const [current,setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;   
    }

    return(
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        {SlideData.map((slide,index) => {
            return (
                <div className={index === current ? "slide active" : "slide"} key={index}>
                    {index === current && (<img
                    onClick={() => onOpenImg(slide?.videoUrl)}
                    className="img" src={slide.image} alt="movie"/>)}
                </div>
            )
        })}
        </section>
    );
};

export default ImageSlide;