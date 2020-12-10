import styled from "styled-components";

export const FooterBase = styled.footer`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px;
  position: relative;

  a {
    display: flex;
    padding: 2px;
    border-radius: 8px;
    line-height: 50px;
    font-size: 12px;
    text-decoration: none;
    font-weight: bold;
    color: #9466ff;
    background-color: #29292e;
    letter-spacing: 2px;

    & + a {
      margin-left: 8px;
    }

    &:hover {
      transition: 0.5s;
      opacity: 0.7;
    }

    svg {
    }
  }
`;
