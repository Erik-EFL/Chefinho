import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';
import renderWithRouter from './Service/renderWithRouter';

describe('Testa o componente Login / requisitos 1 ao 8', () => {
  it('Testa se é possivel digitar nos inputs de email e password', () => {
  const {history} = renderWithRouter(<App />);
  history.push('/');
  const inputEmail = screen.getByTestId('email-input');
  const inputPassword = screen.getByTestId('password-input');
  const buttonDown = screen.getByTestId('login-submit-btn');

  userEvent.type(inputEmail, 'teste@trybe.com');
  userEvent.type(inputPassword, '123456');

  expect(inputEmail).toHaveValue('teste@trybe.com');
  expect(inputPassword).toHaveValue('123456');
  expect(buttonDown).toBeDisabled();
  })
  it('Testa se faz o redirecionamento para a tela principal se os dados forem válidos', () => {
  const {history} = renderWithRouter(<App />);
  history.push('/');
  const inputEmail = screen.getByTestId('email-input');
  const inputPassword = screen.getByTestId('password-input');
  const buttonDown = screen.getByTestId('login-submit-btn');

  userEvent.type(inputEmail, 'teste@trybe.com');
  userEvent.type(inputPassword, '1234567');

  expect(buttonDown).not.toBeDisabled();
  userEvent.click(buttonDown);
  expect(history.location.pathname).toBe('/foods');
  })
});

describe('Teste do componente header / requisitos 9 ao 10', () => {
  it('Testa se aparece o botão de perfil, o título da página e o botão de pesquisa',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    const titlePage = screen.getByTestId('page-title');
    const profileBtn = screen.getByTestId('profile-top-btn');
    const searchBtn = screen.getByTestId('search-top-btn');
    expect(titlePage.textContent).toEqual('Foods'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(profileBtn).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });
  it('[Tela de Login] Testa se não aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/');
    expect(screen.queryByTestId('page-title')).not.toBe('Foods'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  it('[Tela de Detalhes de Receitas de Comida] Testa se não aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods/12345');
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument(); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  it('[Tela de Detalhes de Receitas de Bebida] Testa se não aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/drinks/12345');
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument(); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  it('[Tela de Receitas de Comida em Progresso] Testa se não aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods/12345/in-progress');
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument(); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  it('[Tela de Receitas de Bebida em Progresso] Testa se não aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/drinks/12353/in-progress');
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument(); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  it('[Tela de Comidas]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    expect(screen.getByTestId('page-title').textContent).toBe('Foods'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.getByTestId('search-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Bebidas] Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/drinks');
    expect(screen.getByTestId('page-title').textContent).toBe('Drinks'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.getByTestId('search-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar Comidas]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore/foods');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore Foods'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar Bebidas]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore/drinks');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore Drinks'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar Ingredientes(Comida)]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore/foods/ingredients');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore Ingredients'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar Ingredientes(Bebida)]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore/drinks/ingredients');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore Ingredients'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Receitas Feitas]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/done-recipes');
    expect(screen.getByTestId('page-title').textContent).toBe('Done Recipes'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Receitas Favoritas]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/favorite-recipes');
    expect(screen.getByTestId('page-title').textContent).toBe('Favorite Recipes'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Perfil]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/profile');
    expect(screen.getByTestId('page-title').textContent).toBe('Profile'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar Nacionalidades]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore/foods/nationalities');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore Nationalities'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.getByTestId('search-top-btn')).toBeInTheDocument();
  });
});

describe('Redireciona para a tela de perfil ao clicar no botão de perfil',() => {
  it('[Tela de Perfil]Testa se redireciona para o perfil ao clicar no botão',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    const textProfile = screen.getByText('Profile');
    expect(screen.getByTestId('page-title').textContent).toContain(textProfile.textContent);
  });
});

