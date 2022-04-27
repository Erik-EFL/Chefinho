import React from 'react';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';

export default function ExploreDrinks() {
  return (
    <div>
      <Header
        title="Explore Drinks"
        searchButton={ false }
      />
      <MenuInferior />
    </div>
  );
}
