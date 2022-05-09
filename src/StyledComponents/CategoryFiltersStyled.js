import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

export const Container = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 8px;
  button {
    padding: 2px 16px;
    border: none;
    border-radius: 32px;
    background-color: ${theme.title};
    color: ${theme.bg};
  }
`;

export const oi = 'oi';
