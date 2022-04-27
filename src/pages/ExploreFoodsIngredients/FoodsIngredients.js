import React from 'react';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';

export default function FoodsIngredients() {
  return (
    <div>
      <Header
        title="Explore Ingredients"
        searchButton={ false }
      />
      <MenuInferior />
    </div>
  );
}
