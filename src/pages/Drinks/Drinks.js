import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../Components/Cards';
import CategoryFilter from '../../Components/CategoryFilter';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import AppContext from '../../context/AppContext';

export default function Drinks() {
  const { initialFetchs: { drinks } } = useContext(AppContext);
  const magicNumber = 12;
  const initialDrinks = drinks.filter((_i, index) => index < magicNumber);
  return (
    <div>
      <Header
        title="Drinks"
        searchButton
      />
      <CategoryFilter
        type="drinks"
      />
      {initialDrinks.map((item, index) => (
        <Link
          key={ index }
          to={ `/drinks/${item.idDrink}` }
        >
          <Cards
            image={ item.strDrinkThumb }
            index={ index }
            name={ item.strDrink }
          />
        </Link>
      ))}
      <MenuInferior />
    </div>
  );
}
