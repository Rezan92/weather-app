import React, { useState, useEffect } from "react";
import { cities } from "../project-data/cities";

const SuggestedCities = ({ cityName, setCityName }) => {
  const [matchedCitiesName, setMatchedCitiesName] = useState([]);

  useEffect(() => {
    const capitalizeCityName =
      cityName.length > 0 ? cityName.toUpperCase() : null;

    const citiesList = [...new Set(cities)]; // to remove duplicates from cities array

    const matchedCities = citiesList.filter((city) =>
      city.toUpperCase().startsWith(capitalizeCityName)
    );
    setMatchedCitiesName(matchedCities.slice(0, 4));
  }, [cityName]);

  return (
    <div className="suggestion__container">
      <ul className="suggestion__list">
        {matchedCitiesName.map((city, i) => (
          <li
            key={i}
            className="suggestion__item"
            onClick={() => setCityName(city + "  ")}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedCities;
