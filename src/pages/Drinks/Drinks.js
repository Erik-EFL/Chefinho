import React, { useContext } from 'react';
import Cards from '../../Components/Cards';
import MenuInferior from '../../Components/MenuInferior';
import AppContext from '../../context/AppContext';

export default function Drinks() {
  const { initialFetchs: { drinks } } = useContext(AppContext);
  const magicNumber = 12;
  const initialDrinks = drinks.filter((_i, index) => index < magicNumber);
  return (
    <div>
      {initialDrinks.map((item, index) => (<Cards
        key={ index }
        image={ item.strDrinkThumb }
        index={ index }
        name={ item.strDrink }
      />
      ))}
      <MenuInferior />
    </div>
  );
}