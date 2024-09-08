import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

export const Container = styled.div`
    padding: 40px;
    background-color: #f1f1f1;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    text-align: center;

    h2 {
        font-size: 2.5rem;
        color: #007bff;
        margin-bottom: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: bold;
        border-bottom: 2px solid #007bff;
        display: inline-block;
        padding-bottom: 10px;
        margin-top: 0; /* Título sem margem no topo */
    }

    section {
        margin-top: 40px; /* Espaço entre a descrição e a lista de projetos */
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        padding: 30px;
        border: 2px solid #ddd;
        border-radius: 15px;
        background: #f0f0f0;
        width: calc(50% - 20px);
        text-align: center;
        transition: transform 0.4s ease, box-shadow 0.4s ease;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    img {
        max-width: 100%;
        width: 350px;
        height: auto;
        border-radius: 12px;
        margin-bottom: 20px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

        @media (max-width: 768px) {
            width: 300px;
        }

        @media (max-width: 480px) {
            width: 250px;
        }
    }

    h3 {
        font-size: 2rem;
        color: #007bff;
        margin-bottom: 15px;
        text-transform: uppercase;
        font-weight: bold;
    }

    p {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.5;
    }

    a {
        display: inline-block;
        padding: 12px 20px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        letter-spacing: 0.5px;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: #0056b3;
            transform: scale(1.05);
        }
    }
`;

export const SectionDescription = styled.p`
    font-size: 1.4rem;
    color: #666;
    margin-top: 20px;
    margin-bottom: 40px;
    line-height: 1.8;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    animation: ${fadeIn} 0.8s ease-out;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;
