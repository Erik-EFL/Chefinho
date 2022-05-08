import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

export const HeaderStyled = styled.header`
  display: flex;
  background-color: ${theme.bg};
  color: ${theme.title};
  flex-direction: column;
  div {
    align-items: center;
    justify-content: space-between;
    display:flex;
    width: 100%;
  }

  svg {
    font-size: 24px;
    margin: 0px 16px;
    color: ${theme.title};
  }

`;

export const SearchButton = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: none;
`;

export const oi = 'oi';
