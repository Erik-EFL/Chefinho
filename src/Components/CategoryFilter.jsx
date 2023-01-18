/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import fetchCategories from '../Service/fetchCategories';
import fetchDrinks from '../Service/fetchDrinks';
import fetchFilteredByCategory from '../Service/fetchFilteredByCategory';
import fetchFoods from '../Service/fetchFoods';
import { BoxButton } from '../StyledComponents/Box';
import AppContext from '../context/AppContext';

export default function CategoryFilter(props) {
  const {
    type,
  } = props;
  const [categories, setCategories] = useState([]);
  const {
    setFoods,
    setDrinks,
    activeFilter,
    setActiveFilter,
  } = useContext(AppContext);

  const handleFilter = ({ target }) => {
    if (activeFilter === '') {
      setActiveFilter(target.value);
    } else if (activeFilter === target.value) {
      setActiveFilter('');
    } else {
      setActiveFilter(target.value);
    }
  };

  const renderizeFiltered = async () => {
    if (activeFilter === '') {
      if (type === 'foods') {
        const foodsResult = await fetchFoods();
        setFoods(foodsResult);
      } else {
        const drinksResult = await fetchDrinks();
        setDrinks(drinksResult);
      }
    }
    if (activeFilter !== '' && activeFilter !== 'redirected') {
      const fetchResult = await fetchFilteredByCategory(type, activeFilter);
      if (type === 'foods' && fetchResult) {
        setFoods(fetchResult);
      } else if (type === 'drinks' && fetchResult) {
        setDrinks(fetchResult);
      }
    }
  };

  useEffect(() => {
    renderizeFiltered();
  }, [activeFilter]);

  const getCategories = async () => {
    const fetchResult = await fetchCategories(type);
    setCategories(fetchResult);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <BoxButton>
      <button
        type="button"
        data-testid="All-category-filter"
        value="All"
        onClick={ handleFilter }
      >
        All
      </button>
      {
        categories.map((category, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${category.strCategory}-category-filter` }
            value={ category.strCategory }
            onClick={ handleFilter }
          >
            { category.strCategory }
          </button>
        ))
      }
    </BoxButton>
  );
}

CategoryFilter.propTypes = {
  type: PropTypes.string.isRequired,
};
