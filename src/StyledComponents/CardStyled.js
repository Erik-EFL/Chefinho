import styled from 'styled-components';

const theme = {
  title: '#BF9663',
  text: '#D97016',
};

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 151px;
  height: 205px;
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
    letter-spacing: 0.5px;
    color: ${theme.text};
  }
`;

export default DivCard;
