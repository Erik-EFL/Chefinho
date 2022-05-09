import styled from 'styled-components';

const theme = {
  title: '#BF9663',
  text: '#D97016',
};

export const HeadProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 24px;
  }

  h1 {
    font-size: 22px;
    color: #D97016;
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const ButtonContainer = styled.nav`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;

  button {
    border: none;
    padding: 4px 0;
    border-radius: 32px;
    background-color: ${theme.title};
    color: ${theme.bg};
    font-size: 14px;
    font-weight: 600;
  }

  .logout {

  }
`;
