import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import RecommendationCard from './RecomendationCard';

export default class SliderDrink extends Component {
  render() {
    const { info } = this.props;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div>
        <h2>Recomendations</h2>
        <Slider { ...settings }>
          {info.map((item, index) => (
            <RecommendationCard
              key={ index }
              name={ item.strMeal }
              image={ item.strMealThumb }
              index={ index }
              type={ item.strArea }
            />
          ))}
        </Slider>
      </div>
    );
  }
}
SliderDrink.propTypes = {
  info: PropTypes.array,
}.isRequired;
