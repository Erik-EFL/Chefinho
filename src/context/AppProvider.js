import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchDrinks from '../Service/fetchDrinks';
import fetchFoods from '../Service/fetchFoods';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    initialFetchs: {
      foods,
      drinks,
    },
  };

  const setFoodsAndDrinks = async () => { // Faz a requisição para as Apis de Foods e Drinks e armazena no state.
    setFoods(await fetchFoods()); // Função fetchFoods criada na Pasta Service.
    setDrinks(await fetchDrinks()); // Função fetchDrinks criada na Pasta Service.
  };

  useEffect(() => { // Toda vez que a aplicação iniciar ele vai chamar a função setFoodsAndDrinks
    setFoodsAndDrinks();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default AppProvider;
