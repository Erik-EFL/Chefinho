import React from 'react';
import MenuInferior from '../../Components/MenuInferior';
import Header from '../../Components/Header';

export default function Profile() {
  return (
    <div>
      <Header
        title="Profile"
        searchButton={ false }
      />
      <MenuInferior />
    </div>
  );
}
