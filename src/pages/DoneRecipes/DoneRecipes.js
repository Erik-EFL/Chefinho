import React from 'react';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';

export default function DoneRecipes() {
  return (
    <div>
      <Header
        title="Done Recipes"
        searchButton={ false }
      />
      <MenuInferior />
    </div>
  );
}
