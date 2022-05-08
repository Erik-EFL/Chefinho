import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 260px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  button {
    padding: 2px 12px;
    border: none;
    border-radius: 32px;
    background-color: ${theme.title};
    color: #1b1b1b;
    margin: 4px;
  }
`;

export const oi = 'oi';
