import styled from "styled-components";

export const PostBackground = styled.div`
    background: linear-gradient(135deg, #007bff, #00d4ff);
    padding: 80px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 50px 15px;
    }

    @media (max-width: 480px) {
        padding: 30px 10px;
    }
`;

export const PostImage = styled.img`
    width: 100%;
    max-width: 1200px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    margin-bottom: 40px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        max-width: 100%;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

export const Content = styled.div`
    background: #f9f9f9;
    max-width: 900px;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: left;

    @media (max-width: 768px) {
        padding: 30px;
        max-width: 100%;
    }

    @media (max-width: 480px) {
        padding: 20px;
    }
`;

export const PostTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: linear-gradient(to right, #007bff, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
        margin-bottom: 15px;
    }
`;

export const PostContent = styled.div`
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;

    h2 {
        font-size: 1.6rem;
        margin-top: 20px;
        color: #007bff;
    }

    p {
        margin: 10px 0;
    }

    pre {
        background-color: #e9ecef;
        padding: 15px;
        border-radius: 5px;
        margin: 20px 0;
        overflow-x: auto;

        @media (max-width: 480px) {
            padding: 10px;
            font-size: 0.9rem;
        }
    }

    code {
        background-color: #e3f2fd;
        padding: 5px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const AuthorInfo = styled.p`
    font-size: 1rem;
    color: #666;
    text-align: center;
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding-top: 20px;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;
