import React, { useEffect, useState } from 'react';
import FavoriteCards from '../../Components/FavoriteCards';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import { Box, BoxButton, BoxScroll } from '../../StyledComponents/Box';
// eslint-disable-next-line max-len

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
    <Box>
      <Header
        title="Favorites"
        searchButton={ false }
      />
      <BoxButton>
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
      </BoxButton>

      <BoxScroll>
        {favorites.filter(
          (obj) => obj.type.includes(actualFilter),
        ).map((item, index) => (
          <FavoriteCards
            key={ index }
            item={ item }
            index={ index }
            callback={ setRmHistory }
          />
        ))}
      </BoxScroll>

      <MenuInferior />
    </Box>
  );
}
