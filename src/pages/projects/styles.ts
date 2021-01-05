import styled from 'styled-components';

export const Content = styled.section`
 height: 100%;

 h4{

     max-width: 500px;
     width: 100%;
     color: #fff;
     padding: 16px 8px;
     margin: 16px auto;
     text-align: center;
     font-size: 20px;
     border-bottom: 1px solid #fff;
 }
`;

export const Cards = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 1180px;
    width: 100%;
    margin: 64px auto;
    padding: 16px 25px;

    
@media (max-width: 1000px) {
    max-width: 900px;
    
  }

@media (max-width: 500px) {

justify-content: center;

}
`;



export const Card = styled.div`
display: flex;
max-width: 265px; 
width:100%;
height: 100%;
flex-direction: column;
padding: 8px 16px;
border-radius: 5px;
margin: 8px 8px;
cursor: pointer;
border: 1px solid transparent;
transition: 0.8s;


-webkit-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);

&:hover{
border: 1px solid var(--primary-color);
    
}



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
      display: flex;
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
    position: relative;
    

    h3{
        width: 100%;
        font-size: 20px;
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

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        font-weight: 500;
        width: 30%;
        background-color: #c53030;
        padding: 3px;
        position: absolute;
        border-radius: 5px;
        transform: rotate(-45deg);
        top: 10px;
        left: -20px;

    }
`;

export const Icons = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 16px;     
`;

export const Icon = styled.div`
   & + div{
            margin-left: 16px;
        }
`;

export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;

    a{
        width: 100%;
        font-size: 12px;
        transition: 0.5s;
        background-color: var(--primary-color);
        border: 0;
    }

`;
