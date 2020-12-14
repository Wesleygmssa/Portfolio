import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content:center;
  padding: 24px;
  background: #293647;


  .menuInactive{
  
}

  .menuActive{
    transition:  2s;
      opacity: 1;
  }

 

  div{

    a{
      font-weight: bold;
      color: #FFF;
      font-size: 20px;
      text-decoration: none;
      opacity: 0.6;

    }

    a + a{
      margin-left: 24px;
    }
  }
`;

// export const Link = styled.a<ContainerProps>``