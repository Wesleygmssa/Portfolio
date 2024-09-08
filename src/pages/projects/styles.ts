import styled from "styled-components";

export const Title = styled.h1`
    font-size: 3.5rem;
    color: #007bff;
    text-align: center;
    margin-bottom: 50px;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    background: linear-gradient(135deg, #007bff, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 2px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.section`
    padding: 40px;
    background-color: #f9f9f9;
    min-height: 100vh;

    .content-loading {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
    }

    .loading-spinner {
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #007bff, #00d4ff);
        animation: pulse 1.2s infinite ease-in-out;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.2);
            opacity: 0.7;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Card = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    max-width: calc(33.33% - 30px);
    width: 100%;
    margin: 20px 0;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    img {
        width: 100%;
        height: auto;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        max-width: calc(50% - 20px);
    }

    @media (max-width: 480px) {
        max-width: 100%;
    }
`;

export const CardContent = styled.div`
    padding: 20px;
    text-align: center;

    h3 {
        font-size: 1.8rem;
        font-family: "Roboto", sans-serif;
        margin-bottom: 10px;
        color: #333;
    }

    p {
        font-size: 1.1rem;
        color: #555;
        margin-bottom: 20px;
    }
`;

export const Technologies = styled.div`
    margin-top: 10px;
    font-size: 1rem;
    color: #007bff;

    span {
        background-color: #e0f2fe;
        color: #0369a1;
        padding: 5px 10px;
        border-radius: 4px;
        margin-right: 5px;
        display: inline-block;
    }
`;

export const GroupButton = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;

    a {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-size: 1.1rem;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: #0056b3;
            transform: scale(1.05);
        }
    }
`;
