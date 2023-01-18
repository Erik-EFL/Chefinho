import styled from 'styled-components';
import { buttons } from './Paletas';
// const screenHeight = window.innerHeight;

const Box = styled.div`
  position: relative;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0;


  @media (min-width: 768px) {
    width: 360px;
    height: 98vh;
    max-width: 360px;
    max-height: 100vh;
  }
`;

const BoxScroll = styled.div`
  position: relative;
  border: none;
  background: transparent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px 90px;
  height: 75vh;

  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    width: 0px;
  }

  .ingredientes {
    margin-left: 14px;
  }

  @media (max-width: 768px) {
    margin: 10px auto;
  }
`;

const BoxButton = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 90%;
  margin-bottom: 8px;
  margin-top: 60px;
  position: relative;

  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  overflow-scrolling: touch;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  ::-webkit-scrollbar {
    background: transparent;
  }

  button {
    display: inline-block;
    border: none;
    width: 100%;
    height: 25px;
    background-color: ${buttons.btn1};
    margin-top: 24px;
    border-radius: 5px;
    padding: 0 12px;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    width: 100%;
  }
`;

export {
  Box,
  BoxScroll,
  BoxButton,
};
