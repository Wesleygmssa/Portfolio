import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content:center;
  padding: 16px;
  background: #293647;

  div{

    a{
      font-weight: bold;
      color: #FFF;
      font-size: 20px;
      text-decoration: none;

      &:hover {
      transition: 0.5s;
      opacity: 0.7;
    }
    }

    a + a{
      margin-left: 16px;
    }
  }
`;