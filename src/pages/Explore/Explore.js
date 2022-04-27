import React from 'react';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';

export default function Explore() {
  return (
    <div>
      <Header
        title="Explore"
        searchButton={ false }
      />
      <MenuInferior />
    </div>
  );
}
