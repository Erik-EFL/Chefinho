import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

export const Container = styled.div`
  overflow-x: auto;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  height: 30px;
  gap: 8px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    width: 360px;
  }

  button {
    padding: 2px 16px;
    border: none;
    border-radius: 32px;
    background-color: ${theme.title};
    color: ${theme.bg};
    flex: none;
  }
`;

export const oi = 'oi';
