import styled from 'styled-components';

const theme = {
  title: '#BF9663',
  text: '#D97016',
};

export const PageFood = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin-top: -25px;
    color: ${theme.title};
    font-size: 1em;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: auto;

  height: 600px;

  height: 76.5vh;

  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0px;
  }

  a {
    display: flex;
    justify-content: center;
  }
`;
