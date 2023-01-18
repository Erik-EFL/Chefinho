import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

const FooterStyled = styled.footer`
  background-color: #2b2b2b;
  display: flex;
  bottom: 0;
  gap: 16px;
  height: 60px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;

    position: fixed;
  }

  a {
    height: 40px;
    color: white;
    text-decoration: none;
  }

  p {
    font-weight: 200;
    letter-spacing: 0.007em;
  }

  svg {
    font-size: 24px;
  }

  .active {
    color: ${theme.text};
  }

  .activeExplore {
    color: ${theme.bg};
  }

  .explore {
    position: absolute;
    margin-top: -56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    background-color: ${theme.text};
    font-size: 12px;
    border-radius: 50%;
  }

  .explore div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  .explore p {
    margin: 0px;
  }

`;

export const TwoLinks = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default FooterStyled;
