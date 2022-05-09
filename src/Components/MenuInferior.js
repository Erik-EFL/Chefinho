import React from 'react';
import { BiDrink } from 'react-icons/bi';
import { GiHotMeal } from 'react-icons/gi';
import { MdFavorite } from 'react-icons/md';
import { VscCompass } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import FooterStyled from '../StyledComponents/FooterStyled';

function MenuInferior() {
  return (
    <FooterStyled data-testid="footer" className="footer">
      <NavLink
        to="/drinks"
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
        activeClassName="active"
      >
        <div>
          <BiDrink />
          <p>Drinks</p>
        </div>
      </NavLink>

      <NavLink
        to="/explore"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        activeClassName="active"
      >
        <div>
          <VscCompass />
          <p>Explore</p>
        </div>
      </NavLink>

      <NavLink
        to="/foods"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        activeClassName="active"
      >
        <div>
          <GiHotMeal />
          <p>Meals</p>
        </div>
      </NavLink>

      <NavLink
        to="/favorite-recipes"
        activeClassName="active"
      >
        <div>
          <MdFavorite />
          <p>Favorites</p>
        </div>
      </NavLink>
    </FooterStyled>
  );
}

export default MenuInferior;
