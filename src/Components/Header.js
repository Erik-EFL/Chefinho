import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

function Header(props) {
  const {
    title,
    searchButton,
  } = props;
  const [searchInput, setSearchInput] = useState(false);
  const toggleSearchInput = () => {
    setSearchInput(!searchInput);
  };
  const {
    handleFilters,
    setFilteredItems,
    handleSearchInput,
    filterSearchInput,
  } = useContext(AppContext);
  const history = useHistory();
  const location = history.location.pathname.split('/')[1];
  return (
    <header>
      <Link
        to="/profile"
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profileIcon"
        />
      </Link>
      <h1
        data-testid="page-title"
      >
        { title }
      </h1>
      {searchButton && (
        <button
          type="button"
          className="search-button"
          onClick={ toggleSearchInput }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Search icon."
          />
        </button>
      )}
      {searchInput && (
        <div>
          <label htmlFor="search-input">
            <input
              id="search-input"
              data-testid="search-input"
              type="text"
              value={ filterSearchInput }
              onChange={ ({ target }) => handleSearchInput(target) }
            />
          </label>
          <label htmlFor="ingredient-radio">
            <input
              data-testid="ingredient-search-radio"
              id="ingredient-radio"
              type="radio"
              name="filter-radios"
              onChange={ ({ target }) => handleFilters(target) }
              value="ingredient"
            />
            Ingredient
          </label>
          <label htmlFor="name-radio">
            <input
              data-testid="name-search-radio"
              id="name-radio"
              type="radio"
              name="filter-radios"
              onChange={ ({ target }) => handleFilters(target) }
              value="name"
            />
            Name
          </label>
          <label htmlFor="letter-radio">
            <input
              data-testid="first-letter-search-radio"
              id="letter-radio"
              type="radio"
              name="filter-radios"
              onChange={ ({ target }) => handleFilters(target) }
              value="firstLetter"
            />
            First Letter
          </label>
          <button
            type="button"
            onClick={ () => setFilteredItems(location) }
            data-testid="exec-search-btn"
          >
            Search
          </button>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchButton: PropTypes.bool.isRequired,
};

export default Header;
