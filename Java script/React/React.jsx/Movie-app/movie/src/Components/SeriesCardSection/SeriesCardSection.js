import React from "react";
import SeriesCard from "../SeriesCard/SeriesCard";
import "./SeriesCardSection.css"

export default function SeriesCardSection({ SeriesData }) {
    const renderAllSeries = () => {
      return SeriesData.map((series) => {
        return <SeriesCard key={series.id} {...series} />;
      });
    };
    return <div className="series-section">{renderAllSeries()}</div>;
  }