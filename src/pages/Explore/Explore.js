import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import { Container } from '../../StyledComponents/CategoryFiltersStyled';

export default function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header
        title="Explore"
        searchButton={ false }
      />
      <div style={ { maxWidth: '86%', margin: '0 auto' } }>
        <Container>
          <button
            style={ { width: '150px' } }
            type="button"
            data-testid="explore-foods"
            onClick={ () => history.push('/explore/foods') }
          >
            Explore Foods
          </button>
          <button
            style={ { width: '150px' } }
            type="button"
            data-testid="explore-drinks"
            onClick={ () => history.push('/explore/drinks') }
          >
            Explore Drinks
          </button>
        </Container>
      </div>
      <MenuInferior />
    </div>
  );
}
