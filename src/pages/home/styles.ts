import styled from "styled-components"

export const Container = styled.section`
height: 100%;
position: relative;

@media (min-width: 700px) {
    height: 100%;
  }

`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  

    img{
        width: 200px;
        height: 200px;
        border-radius: 40px;
        margin-top: 24px;
        border: 3px solid #5c00b9;

        -webkit-box-shadow: 1px 4px 57px 6px rgba(0,0,0,0.75);
        -moz-box-shadow: 1px 4px 57px 6px rgba(0,0,0,0.75);
        box-shadow: 1px 4px 57px 6px rgba(0,0,0,0.75);
    }

    h1,p, span{
        color: #fff;
        margin-top: 24px;
        font-family: 'Roboto', sans-serif;
    }

    h1{
        font-size: 32px;
    }

    p{
        text-align: center;
        max-width:700px;
        width: 100%;
        line-height:25px;
        padding: 0px 40px;
        text-align: justify;
        position: relative;

    }
    span{
        text-align: center;
        padding: 0px 16px;

    }

    strong{
        padding: 44px 40px;
        font-size: 24px;
        color: #FFF;
        text-align: center;
    }

    ul{
        max-width:700px;
        width: 100%;
        padding: 8px 40px;

        li{
            list-style: none;
            padding: 8px;
            color: #fff;
        }
    }

`;


