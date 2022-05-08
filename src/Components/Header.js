import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { RiSearchLine, RiUserFill } from 'react-icons/ri';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { HeaderStyled, SearchButton } from '../StyledComponents/HeaderStyled';

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
    <HeaderStyled>
      <div>
        <Link
          to="/profile"
        >
          <RiUserFill data-testid="profile-top-btn" />
        </Link>
        <h1
          data-testid="page-title"
        >
          { title }
        </h1>
        {searchButton && (
          <SearchButton
            type="button"
            className="search-button"
            onClick={ toggleSearchInput }
          >
            <RiSearchLine data-testid="search-top-btn" />
          </SearchButton>
        )}
      </div>
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
    </HeaderStyled>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchButton: PropTypes.bool.isRequired,
};

export default Header;
