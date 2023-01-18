import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import fetchRandomDrink from '../../Service/fetchRandomDrink';
import { Box } from '../../StyledComponents/Box';
import Button from '../../StyledComponents/Button';
import Container from '../../StyledComponents/ExploreFoods/Styled';

export default function ExploreDrinks() {
  const history = useHistory();

  const handleSurprise = async () => {
    const randomDrink = await fetchRandomDrink();
    history.push(`/drinks/${randomDrink[0].idDrink}`);
  };

  return (
    <Box>
      <Header
        title="Explore Drinks"
        searchButton={ false }
      />
      <Container>
        <Button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </Button>
        <Button
          type="button"
          data-testid="explore-surprise"
          onClick={ handleSurprise }
        >
          Surprise me!
        </Button>
      </Container>
      <MenuInferior />
    </Box>
  );
}
