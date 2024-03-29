import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import { Box } from '../../StyledComponents/Box';
import Button from '../../StyledComponents/Button';
import { ButtonContainer } from '../../StyledComponents/ProfileStyled';

export default function Explore() {
  const history = useHistory();
  return (
    <Box>
      <Header
        title="Explore"
        searchButton={ false }
      />
      <ButtonContainer>
        <Button
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </Button>
        <Button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </Button>
      </ButtonContainer>
      <MenuInferior />
    </Box>
  );
}
