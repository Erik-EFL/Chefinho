import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 151px;
  height: 200px;
  margin: 8px;
  img {
    width: 151px;
    height: 151px;
    border-radius: 16px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 16px;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.5px;
    color: ${theme.text};
  }
`;

export const oi = 'oi';
