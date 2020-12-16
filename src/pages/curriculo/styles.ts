import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 56px;
    min-height: 100vh;

    h1{
        opacity: 0;
        animation: fadeInText;
    }


    @keyframes fadeInText{
        from {
            opacity: 0;
            }
         to{
             opacity: 1;
             }
    }
`;