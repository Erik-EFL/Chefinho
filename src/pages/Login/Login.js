import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import LoginStyled from '../../StyledComponents/LoginStyled';

export default function Login() {
  const { email, setEmail, password, setPassword } = useContext(AppContext);
  const history = useHistory();

  const validate = () => {
    const numberSix = 6;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValid = emailRegex.test(email);
    const validPassword = password.length > numberSix;
    const fields = [email, password];
    const validFields = fields.every((field) => field !== '');
    const validAllFields = emailValid && validFields && validPassword;

    return validAllFields;
  };

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);

    const user = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/foods');
  };

  return (
    <div>
      <LoginStyled>
        <div>
          <input
            type="email"
            data-testid="email-input"
            value={ email }
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <input
            type="password"
            value={ password }
            data-testid="password-input"
            placeholder="Password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
          <p><Link to="/refoundPassword">Forgot password?</Link></p>
        </div>
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={ !validate() }
          onClick={ handleClick }
        >
          Enter

        </button>
        <p>Dont have </p>
      </LoginStyled>
    </div>
  );
}
