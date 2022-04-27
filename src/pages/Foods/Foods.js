import React, { useContext } from 'react';
import Cards from '../../Components/Cards';
import MenuInferior from '../../Components/MenuInferior';
import AppContext from '../../context/AppContext';
import Header from '../../Components/Header';

function Foods() {
  const { initialFetchs: { foods } } = useContext(AppContext);
  const magicNumber = 12;
  const initialFoods = foods.filter((_i, index) => index < magicNumber);
  return (
    <div>
      <Header
        title="Foods"
        searchButton
      />
      {initialFoods.map((item, index) => (<Cards
        key={ index }
        image={ item.strMealThumb }
        index={ index }
        name={ item.strMeal }
      />
      ))}
      <MenuInferior />
    </div>
  );
}

export default Foods;
