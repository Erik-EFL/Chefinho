/* eslint-disable react-hooks/exhaustive-deps */
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import getFavorite from '../../Service/getFavorite';
import { setFavoriteDrink, setFavoriteFood } from '../../Service/setFavorite';

function FavoriteBtn(props) {
  const {
    id,
  } = props;
  const history = useHistory();
  const [renderFav, setRenderFav] = useState(false);
  const [fav, setFav] = useState([]);
  const path = history.location.pathname;
  const type = path.includes('drinks') ? 'drinks' : 'foods';

  useEffect(() => {
    let url = '';
    if (type === 'foods') {
      url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    } else if (type === 'drinks') {
      url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (type === 'foods') {
          return setFav(...data.meals);
        }
        return setFav(...data.drinks);
      });
  }, []);

  useEffect(() => {
    setRenderFav(getFavorite(id));
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={ () => (fav && type === 'drinks'
          ? setFavoriteDrink(fav, setRenderFav)
          : setFavoriteFood(fav, setRenderFav)) }
      >
        <img
          data-testid="favorite-btn"
          src={ renderFav ? blackHeartIcon : whiteHeartIcon }
          alt="favoriteBtn"
        />
      </button>
    </div>
  );
}

FavoriteBtn.propTypes = {
  id: PropType.string.isRequired,
};

export default FavoriteBtn;
