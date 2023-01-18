import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import fetchRandomFood from '../../Service/fetchRandomFood';
import { Box } from '../../StyledComponents/Box';
import Button from '../../StyledComponents/Button';
import Container from '../../StyledComponents/ExploreFoods/Styled';

export default function ExploreFoods() {
  const history = useHistory();

  const handleSurprise = async () => {
    const randomFood = await fetchRandomFood();
    history.push(`/foods/${randomFood[0].idMeal}`);
  };

  return (
    <Box>
      <Header
        title="Explore Foods"
        searchButton={ false }
      />
      <Container>
        <Button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </Button>
        <Button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
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
