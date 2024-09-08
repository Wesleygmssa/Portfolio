import styled from "styled-components";

export const Content = styled.section`
    min-height: 100vh;
    padding: 20px;
    background-color: #f8f9fa;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 40px;
`;

export const Cards = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;

export const Card = styled.div`
    flex: 1 1 calc(33% - 24px);
    max-width: calc(33% - 24px);
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.03);
    }

    @media (max-width: 1000px) {
        flex: 1 1 calc(50% - 24px);
        max-width: calc(50% - 24px);
    }

    @media (max-width: 768px) {
        flex: 1 1 100%;
        max-width: 100%;
    }

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
`;

export const CardContent = styled.div`
    padding: 20px;
    text-align: center;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 15px;
        color: #333;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        color: #555;
        margin-bottom: 10px;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-size: 1rem;
    }

    button:hover {
        background-color: #0056b3;
    }
`;
