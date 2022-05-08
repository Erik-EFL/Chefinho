import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

const FooterStyled = styled.footer`
  background-color: ${theme.title};
  bottom: 0;
  display: flex;
  left: 0;
  position: fixed;
  width: 100%;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;

  a {
    height: 40px;
    color: ${theme.bg}
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    font-weight: 200;
    letter-spacing: 0.007em;
  }

  svg {
    font-size: 24px;
  }

  .active {
    color: white;
  }

`;

export default FooterStyled;
