import styled from "styled-components";

export const FooterBase = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100px;
  background: #293647;

  > div{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span{
      text-align: center;
      font-weight: bold;
      color: #0b0b0d;
  }

  

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
  }
`;
