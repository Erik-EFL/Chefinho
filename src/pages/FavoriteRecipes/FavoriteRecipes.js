import React, { useEffect, useState } from 'react';
import FavoriteCards from '../../Components/FavoriteCards';
import Header from '../../Components/Header';

export default function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);
  const [rmHistory, setRmHistory] = useState([]);
  const [actualFilter, setActualFilter] = useState('');

  useEffect(() => {
    const getFavoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getFavoriteStorage) setFavorites(getFavoriteStorage);
  }, []);

  useEffect(() => {
    const getFavoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getFavoriteStorage) {
      setFavorites(getFavoriteStorage);
    } else {
      setFavorites([]);
    }
  }, [rmHistory]);
  return (
    <div>
      <Header
        title="Favorite Recipes"
        searchButton={ false }
      />
      <div>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setActualFilter('food') }
        >
          Food

        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setActualFilter('drink') }
        >
          Drinks

        </button>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setActualFilter('') }
        >
          All

        </button>
      </div>
      {favorites.filter((obj) => obj.type.includes(actualFilter)).map((item, index) => (
        <FavoriteCards
          key={ index }
          item={ item }
          index={ index }
          callback={ setRmHistory }
        />))}
    </div>
  );
}
