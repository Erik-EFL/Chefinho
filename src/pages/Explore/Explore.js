import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';

export default function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header
        title="Explore"
        searchButton={ false }
      />
      <div>
        <button
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <MenuInferior />
    </div>
  );
}
