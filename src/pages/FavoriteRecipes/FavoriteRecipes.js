import React from 'react';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';

export default function FavoriteRecipes() {
  return (
    <div>
      <Header
        title="Favorite Recipes"
        searchButton={ false }
      />
      <MenuInferior />
    </div>
  );
}
