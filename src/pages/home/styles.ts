import styled, { keyframes } from "styled-components";

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

    h3 {
        text-align: center;
        font-size: 24px;
        padding: 16px 20px;
        color: #fff;
    }

    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: 24px;
        border: 3px solid var(--primary-color);
        cursor: pointer;

        -webkit-box-shadow: 1px 4px 57px 6px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 4px 57px 6px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 4px 57px 6px rgba(0, 0, 0, 0.75);
    }

    h1,
    p,
    span {
        color: var(--text-color);
        margin-top: 24px;
        font-family: "Roboto", sans-serif;
    }

    h1 {
        font-size: 32px;
        border-right: 2px solid var(--text-color);
        white-space: nowrap;
        overflow: hidden;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 20px;
        }
    }

    .typing-animation {
        animation: linkCursor 500ms steps(40) infinite normal,
            typing 4s steps(40) 1s normal both;
        color: var(--title-color);
    }

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 13em;
        }
    }

    @keyframes linkCursor {
        from {
            border-right-color: rgba(255, 255, 255, 0.75);
        }
        to {
            border-right-color: transparent;
        }
    }

    h3 {
        opacity: 0.6;
    }

    p {
        text-align: center;
        max-width: 800px;
        width: 100%;
        line-height: 25px;
        padding: 0px 15px;
        text-align: justify;
        position: relative;
        font-weight: 500;
    }
    span {
        text-align: center;
        padding: 0px 16px;
    }

    button {
        margin: 100px 40px;
        font-size: 24px;
        text-align: center;
        background-color: transparent;
        color: var(--title-color);
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        li {
            color: var(--text-color);
            list-style: none;
            padding: 10px;
        }
    }
`;

export const BoxSkills = styled.div`
    width: 1000px;
`;

//animação
const WidthSkill = keyframes`
 from{
   width: 0;
 }
 to{
   width: 60%;
 }
`;
export const Skills = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    span svg {
        top: -10px;
        position: relative;
    }
    progress[value] {
        width: 60%;
        height: 20px;
        animation: ${WidthSkill} 4s; //executando animação
    }

    strong {
        margin-left: 5px;
        color: #fff;
    }
    progress {
    }
`;
