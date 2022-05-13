import styled from 'styled-components';

const theme = {
  title: '#BF9663',
  text: '#D97016',
};

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 160px;
  margin: 16px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 16px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    margin-top: 8px;
    font-size: 17px;
    letter-spacing: 0.5px;
    color: ${theme.text};
  }
`;

export default DivCard;
