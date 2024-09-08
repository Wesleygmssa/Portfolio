import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 12px 30px;
    background: linear-gradient(45deg, #007bff, #00d4ff);
    color: #fff;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
        background: linear-gradient(45deg, #0056b3, #0094ff);
    }
`;

export const SearchInputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const SearchInput = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 12px 20px;
    border-radius: 25px;
    border: 2px solid #007bff;
    outline: none;
    font-size: 1.1rem;
    background-color: #f9f9f9;
    color: #333;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:focus {
        border-color: #0056b3;
        background-color: #fff;
    }

    &::placeholder {
        color: #aaa;
    }
`;

export const Content = styled.section`
    padding: 40px;
    background-color: #f1f1f1;
    min-height: 100vh;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        gap: 20px;
    }
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

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    }

    p {
        font-size: 1.1rem;
        color: #555;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            font-size: 1rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
        }
    }
`;

export const HighlightSection = styled.section`
    background-color: #007bff;
    color: white;
    padding: 50px 0;
    text-align: center;
    background-image: url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        padding: 30px 0;
    }
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    background: linear-gradient(135deg, #00d4ff, #007bff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const BlogDescription = styled.p`
    font-size: 1.4rem;
    color: #fff;
    max-width: 900px;
    margin: 0 auto;
    line-height: 1.8;
    font-family: "Open Sans", sans-serif;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;
