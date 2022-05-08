import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

export const HeaderStyled = styled.header`
  display: flex;
  background-color: ${theme.bg};
  color: ${theme.title};
  flex-direction: column;
  padding-top: 8px;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 24px;
    margin: 0px 16px;
    color: ${theme.title};
  }

`;

export const SearchFilters = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: none;
`;

export const DivComponents = styled.div`
    align-items: center;
    justify-content: space-between;
    display:flex;
    width: 100%;
    padding: 0 24px;
`;

export const DivSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  margin: 8px;
`;

export const InputSearch = styled.input`
  border: none;
  background: #F4F5F7;
  border-radius: 32px;
  padding: 6px 16px;
  width: 200px;
  outline: none;
`;

export const BtnSearch = styled.button`
  padding: 6px 12px;
  border-radius: 16px;
  background-color: ${theme.title};
  color: #1b1b1b;
  border: none;
`;

export const DivRadios = styled.div`
  input {
    display: none;
  }

  svg {
    margin: 0px 8px;
  }
`;
