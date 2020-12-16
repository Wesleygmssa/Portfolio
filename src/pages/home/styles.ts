import styled from "styled-components"

export const Container = styled.section`
height: 100%;
position: relative;
padding: 60px 30px;

@media (min-width: 700px) {
    height: 100%;
  }

`;


export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3{
      text-align: center;
      font-size: 24px;
      padding: 16px;
      color: #fff;
  }
  

    img{
        width: 200px;
        height: 200px;
        border-radius: 40px;
        margin-top: 24px;
        border: 3px solid #5c00b9;
        cursor: pointer;

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
        border-right: 2px solid rgba(255,255,255,0.75);
        white-space: nowrap;
        overflow: hidden;
    }

    @media (max-width: 500px) {
        h1{
            font-size: 20px;
        }
  }

 

    .typing-animation{
        animation: linkCursor 500ms steps(40) infinite normal,
        typing 4s steps(40)  1s normal both;
    }


    @keyframes typing{
        from{
            width: 0;
        }
        to{
            width: 13em;
        }
    }

    @keyframes linkCursor{
        from{
            border-right-color: rgba(255,255,255,0.75);
        }to{
            border-right-color: transparent;
        }
    }

    h3{
        opacity: 0.6;
    }

    p{
        text-align: center;
        max-width:800px;
        width: 100%;
        line-height:25px;
        padding: 0px 15px;
        text-align: justify;
        position: relative;

    }
    span{
        text-align: center;
        padding: 0px 16px;

    }

    button{
        margin: 40px 40px;
        font-size: 24px;
        text-align: center;
        background-color: transparent;
        color: #fff;
    }

    ul{
        max-width:500px;
        width: 100%;
        padding: 30px 40px;
        transition: 0.2s;
        border: 1px dashed #fff;;

        li{
            list-style: none;
            padding: 16px 0px;
            color: #fff;
        }

        li + li{
            border-top: 1px solid #575757;

        }
    }

    /* ul + ul{
        border-left: 2px solid #fff;
    } */

`;


