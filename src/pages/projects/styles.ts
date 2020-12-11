import styled from 'styled-components';

export const Content = styled.section`
 height: 100%;

 h1{
     color: #fff;
     padding: 32px;
     text-align: center;
 }
`;


export const Cards = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
    padding: 0px 30px;
`;

export const Card = styled.div`
display: flex;
background-color:  #171f28;
max-width: 400px; 
width:100%;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 8px 16px;
border-radius: 5px;
margin: 8px 8px;

-webkit-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);


 .card-img{
     max-width: 500px;
     width: 100%;
 }


 img{
    width:100%;
    height: 200px;
}

a{
    color: #fff;
}

/* & + div{
    margin-left: 16px;
} */


@media (max-width: 850px) {
  
  & + div{
      margin-top: 16px;
      margin-left: 0px;
  }
  }


`;

export const CardContent = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    padding: 8px 8px;

    h3{
        font-size: 32px;
        padding: 8px 16px;

    }
    P{
        width: 100%;
        padding: 16px 0px;
    }
  

    ul{
        display: flex;
        padding: 16px 0px;     

        a + a{
            margin-left: 16px;
        }
    }

.button-group{
    display: flex;
    width: 100%;

    a{
        width: 100%;
        font-size: 16px;
    }
}
   

`;