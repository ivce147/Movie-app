import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieCardSection.css"

export default function MovieCardSection({ movieData }) {
    const renderAllMovie = () => {
      return movieData.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      });
    };
    return <div className="movie-section">{renderAllMovie()}</div>;
  }