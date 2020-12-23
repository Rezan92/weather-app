import React from "react";

const SearchInput = ({ cityName, setCityName, handleSubmit }) => {
  return (
    <div className="search-city">
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
    </div>
  );
};

export default SearchInput;