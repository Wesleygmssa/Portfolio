import styled from 'styled-components';

export const Content = styled.section`
 height: 100%;

 h4{
     margin-top: 24px;
     color: #fff;
     padding: 32px;
     text-align: center;
     font-size: 20px;
 }
`;


export const Cards = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    padding: 60px 30px;
`;

export const Card = styled.div`
display: flex;
max-width: 250px; 
width:100%;
flex-direction: column;
padding: 8px 16px;
border-radius: 5px;
margin: 8px 8px;

-webkit-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);



 .card-img{
     max-width: 300px;
     width: 100%;
 }


 img{
    max-width: 300px;
     width: 100%;
     max-height: 100px;
}

a{
    color: #fff;
}



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

    h3{
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        padding: 16px 16px;

    }

    P{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        line-height: 25px;
        min-height: 80px;
        
    }
  

    ul{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 16px;

        a + a{
            margin-left: 16px;
        }
    }

.button-group{
    display: flex;
    width: 100%;

    a{
        width: 100%;
        font-size: 12px;
        transition: 0.5s;
        background-color: var(--primary-color);
        border: 0;
    }
}
   

`;