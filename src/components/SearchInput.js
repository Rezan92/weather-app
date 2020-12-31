import React from "react";
import "../style/SearchInput.css";
import { MdClear } from "react-icons/md";
import SuggestedCities from "./SuggestedCities";

const SearchInput = ({ cityName, setCityName, handleSubmit }) => {
  return (
    <div className="search-city">
      {cityName && (
        <MdClear
          className="search-clear-icon"
          onClick={() => setCityName("")}
        />
      )}
      <input
        className="search-city_input"
        type="text"
        placeholder="Search City"
        onChange={(e) => setCityName(e.target.value)}
        value={cityName}
      />
      <button
        className="search-city_btn"
        onClick={handleSubmit}
        disabled={cityName.trim() === "" ? true : false}
        style={{ cursor: cityName.trim() === "" ? "not-allowed" : "pointer" }}
      >
        Search
      </button>
      <SuggestedCities cityName={cityName} setCityName={setCityName} />
    </div>
  );
};

export default SearchInput;
