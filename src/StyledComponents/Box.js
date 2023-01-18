import styled from 'styled-components';

const screenHeight = window.innerHeight;

const Box = styled.div`
  position: relative;
  border: none;
  background-color: transparent;

  @media (min-width: 360px) {
    width: 360px;
    height: 640px;

    max-width: 360px;
    max-height: 640px;
    margin: auto;
  }
`;

const BoxScroll = styled.div`
  position: relative;
  border: none;
  background-color: transparent;

  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  width: 360px;
  height: ${screenHeight}px;
`;

export {
  Box,
  BoxScroll,
};
