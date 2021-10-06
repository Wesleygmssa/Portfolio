import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    position: relative;
    padding: 60px 30px;

    @media (min-width: 700px) {
        height: 100%;
    }
`;
export const Content = styled.div`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .background-image {
        position: absolute;
        max-width: 20000px;
        width: 100%;
        height: 100%;
        background-image: url("https://i.pinimg.com/originals/e5/14/15/e514153d56a92070b5bcd2ec898dea51.gif");
        background-size: cover;
        background-repeat: no-repeat, repeat;
        background-position: center; /* Center the image */
    }

    h1 {
        z-index: 9999;
        text-align: center;
        font-size: 80px;
        padding: 16px 20px;
    }

    span {
        font-size: 35px;
        opacity: 0.7;
        font-family: "Courier New", Courier, monospace;
        font-weight: 300;
        z-index: 9999;
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 50px;
        }
        span {
            font-size: 20px;
        }
    }
`;
