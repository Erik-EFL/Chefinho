import styled from 'styled-components';
import { buttons, text } from './Paletas';

export const Recipes = styled.div`
  position: relative;
  height: 98vh;
  max-height: 100vh;

  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const MainContent = styled.div`
  position: absolute;
  width: 100%;
  margin-top: -60px;
  background-color: black;
  border-radius: 32px 32px 0 0;
`;

export const ContainerRecipe = styled.div`
  color: ${text.paragraph} ;
  width: 92%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .start-recipe {
    position: relative;
    background: ${buttons.btn1};
    border: none;
    padding: 8px;
    border-radius: 12px 12px 0 0;
  }

  h2 {
    margin-top: 24px;
    margin-bottom: 20px;
    color: ${text.paragraph};
  }
`;

export const CabecalioRecipe = styled.div`
  position: relative;
  color: ${text.title};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  max-width: 95%;
  margin: 44px auto;
  h1 {
    margin-left: 14px;
  }

  .titleSub {
    display: flex;
    flex-direction: column;
    p {
      width: 200px;
      margin-top: 0;
      margin-left: 18px;
    }
  }

  div {
    width: 100px;
    display: flex;
  }

  svg {
    color: ${text.title};
    font-size: 26px;
  }

  .link-copied {
    position: absolute;
    margin-top: 20px;
  }
`;
