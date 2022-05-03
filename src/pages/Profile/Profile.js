import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';

export default function Profile({ history }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('user'));
    if (store) setEmail(store.email);
  }, []);

  return (
    <div>
      <Header
        title="Profile"
        searchButton={ false }
      />
      <div className="profile">
        <h1 data-testid="profile-email">{ email }</h1>
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
          onClick={ () => { localStorage.clear(); history.push('/'); } }
        >
          Logout
        </button>
      </div>
      <MenuInferior />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.object,
}.isRequired;
