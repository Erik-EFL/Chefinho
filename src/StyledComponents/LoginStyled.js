import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vmax;
  p {
    color: ${theme.text};
  }
  h1 {
    color: ${theme.title};
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    input {
      width: 327px;
      height: 56px;
      border-radius: 32px;
      border: 1px #D0DBEA solid;
      padding-left: 24px;
    }

    input + input{
      margin-top: 16px;
    }
    
    p {
      margin-top: 24px;
      margin-bottom: 72px;
      padding-right: 4px;
      align-self: flex-end;
    }
  }

  button {
      width: 327px;
      height: 56px;
      border-radius: 32px;
      border: none;
      color: #1b1b1b;
      background: #BF9663;
      margin-bottom: 24px;
  }
`;

export default LoginContainer;
