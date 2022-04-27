import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './MenuInferior.css';

function MenuInferior() {
  return (
    <footer data-testid="footer" className="footer">
      <Link
        to="/drinks"
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
      >
        <img src={ drinkIcon } alt="drinkBtn" />
      </Link>

      <Link
        to="/explore"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
      >
        <img src={ exploreIcon } alt="exploreBtn" />
      </Link>

      <Link
        to="/foods"
        data-testid="food-bottom-btn"
        src={ mealIcon }
      >
        <img src={ mealIcon } alt="foodBtn" />
      </Link>
    </footer>
  );
}

export default MenuInferior;
