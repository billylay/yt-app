import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="search">Video Searches</label>
          <div className="ui action input">
            <input
              id="search"
              type="text"
              value={term}
              onChange={(event) => {
                setTerm(event.target.value);
                console.log(event.target.value);
              }}
              placeholder="Enter video name..."
            />
            <button className="ui icon button" onSubmit={onFormSubmit}>
              <i className="search icon"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
