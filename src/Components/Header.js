import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        <label htmlFor="search-input">
          <input
            id="search-input"
            data-testid="search-input"
            type="text"
          />
        </label>
      )}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchButton: PropTypes.bool.isRequired,
};

export default Header;
