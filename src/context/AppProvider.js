import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
  };

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
