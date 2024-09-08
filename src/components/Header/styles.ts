import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #1f1f1f;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    position: relative;
`;

export const HamburgerButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
    cursor: pointer;
    z-index: 1001;

    span {
        width: 100%;
        height: 3px;
        background-color: #ffffff;
        transition: all 0.3s ease;
    }

    span:nth-child(1) {
        transform: ${(props) =>
            props.isOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
    }

    span:nth-child(2) {
        opacity: ${(props) => (props.isOpen ? "0" : "1")};
    }

    span:nth-child(3) {
        transform: ${(props) =>
            props.isOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)"};
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const NavMenu = styled.nav`
    display: flex;
    gap: 2rem;
    flex-grow: 1;
    justify-content: center;

    a {
        text-decoration: none;
        font-size: 1.2rem;
        color: #ddd;
        position: relative;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: #ffffff;
        }

        &.menuActive {
            color: #ffffff;
            font-weight: bold;

            &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 3px;
                background-color: #ffffff;
                bottom: -5px;
                left: 0;
                transition: width 0.3s ease-in-out;
            }
        }
    }

    @media (max-width: 768px) {
        position: absolute;
        top: 60px;
        right: 0;
        background-color: #1f1f1f;
        width: 100%;
        height: ${(props) => (props.isOpen ? "100vh" : "0")};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        overflow: hidden;
        transition: height 0.3s ease;
        z-index: 1000;
    }
`;
