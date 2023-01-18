import styled from 'styled-components';
import { buttons, text } from './Paletas';

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
    color: ${text.paragraph};
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 360px;
  max-height: 85vh;
`;

export const ButtonContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  height: 98vh;
  gap: 10px;

  button {
    border: none;
    padding: 4px 0;
    border-radius: 32px;
    background-color: ${buttons.btn1};
    color: ${text.btnText};
    font-size: 14px;
    font-weight: 600;
    width: 15rem;
  }

  @media (min-width: 768px) {
    max-width: 360px;
    max-height: 100vh;

    margin: auto;
  }
`;
