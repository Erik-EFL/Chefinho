import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../Components/Cards';
import CategoryFilter from '../../Components/CategoryFilter';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import AppContext from '../../context/AppContext';
import { CardContainer, PageFood } from '../../StyledComponents/FoodStyled';

function Foods() {
  const { initialFetchs: { foods } } = useContext(AppContext);
  const magicNumber = 12;
  const initialFoods = foods.filter((_i, index) => index < magicNumber);

  return (
    <PageFood>
      <Header
        title="Foods"
        searchButton
      />
      <h4>Filters by Category</h4>
      <CategoryFilter
        type="foods"
      />
      <CardContainer>
        {initialFoods.map((item, index) => (
          <Link
            key={ index }
            to={ `/foods/${item.idMeal}` }
          >
            <Cards
              image={ item.strMealThumb }
              index={ index }
              name={ item.strMeal }
            />
          </Link>

        ))}
      </CardContainer>
      <MenuInferior />
    </PageFood>
  );
}

export default Foods;
