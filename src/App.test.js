import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';
import renderWithRouter from './Service/renderWithRouter';

describe('Testa o componente Login', () => {
  it('Testa se é possivel digitar nos inputs de email e password', () => {
    const {history} = renderWithRouter(<App />);
  history.push('/')
  const inputEmail = screen.getByTestId('email-input')
  const inputPassword = screen.getByTestId('password-input')
  const buttonDown = screen.getByTestId('login-submit-btn')

  userEvent.type(inputEmail, 'teste@trybe.com')
  userEvent.type(inputPassword, '123456')

  expect(inputEmail).toHaveValue('teste@trybe.com')
  expect(inputPassword).toHaveValue('123456')
  expect(buttonDown).toBeDisabled()
  })

  it('Testa se faz o redirecionamento para a tela principal se os dados forem válidos', () => {
  const {history} = renderWithRouter(<App />);
  history.push('/')
  const inputEmail = screen.getByTestId('email-input')
  const inputPassword = screen.getByTestId('password-input')
  const buttonDown = screen.getByTestId('login-submit-btn')

  userEvent.type(inputEmail, 'teste@trybe.com')
  userEvent.type(inputPassword, '1234567')

  expect(buttonDown).not.toBeDisabled()
  userEvent.click(buttonDown)
  expect(history.location.pathname).toBe('/foods')
  })
})
