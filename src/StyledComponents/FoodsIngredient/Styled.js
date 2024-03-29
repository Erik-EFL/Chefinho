import styled from 'styled-components';
import { text } from '../Paletas';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 80px;
  margin-top: 60px;

  @media (max-width: 768px) {

  }
`;

export const Card = styled.button`

  border: none;
  background-color: transparent;
  img {
    width: 80px;
  }

  h4 {
    margin-top: 8px;
    font-size: 1em;
    color: ${text.paragraph};
  }
`;
