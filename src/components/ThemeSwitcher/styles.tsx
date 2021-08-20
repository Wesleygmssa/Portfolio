import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
    position: absolute;
    margin-top: 15px;
    top: 5px;
    right: 0.5%;

    z-index: 10;
    transition: transform 0.9s;
    &:hover {
        transform: scale(1.5);
    }
`;
