import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import { Container } from '../../StyledComponents/CategoryFiltersStyled';

export default function Profile({ history }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('user'));
    if (store) setEmail(store.email);
  }, []);

  const setClearStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header
        title="Profile"
        searchButton={ false }
      />
      <div className="profile">
        <h1
          style={ { fontSize: '22px', color: '#D97016', textAlign: 'center' } }
          data-testid="profile-email"
        >
          { email }

        </h1>
        <Container>
          <button
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/done-recipes') }
          >
            Done Recipes
          </button>
          <button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => history.push('/favorite-recipes') }
          >
            Favorite Recipes
          </button>
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ setClearStorage }
          >
            Logout
          </button>
        </Container>
      </div>
      <MenuInferior />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.object,
}.isRequired;
