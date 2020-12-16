import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 56px;
    min-height: 100vh;

    h1{
        /* width: 500px; */
        opacity: 0;
        animation: fadeInText 0s 1.1s both;
        letter-spacing: 5px;
        
    }

    .text-block{
        overflow: hidden;
        position: relative;
    }

    .text-block:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #c48e84;
        transform: translateX(-100%);
        animation: enLargeBlock .5 1s , reveaLBlock .5s 1.1s both;
    }


    @keyframes fadeInText{
        from {
            opacity: 0;
            }
         to{
             opacity: 1;
        }
    }

    @keyframes enLargeBlock{
        from {
           width: 0%;
            }
         to{
            width: 100%;
        }
    }


    @keyframes reveaLBlock{
        from {
            transform: translateX(0);
            }
         to{
            transform: translateX(100%);
        }
    }
`;