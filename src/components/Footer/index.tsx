import React from "react";
import { FooterBase } from "./styles";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaYarn,
  FaDatabase,
  FaCss3,
} from "react-icons/fa";

const Footer: React.FC = (props) => {
  return (
    <>
      <FooterBase>
        <a href="/">
          <FaHtml5 size={40} style={{ color: "#EB3C32" }} />
        </a>
        <a href="/">
          <FaCss3 size={40} style={{ color: "#016EB6" }} />
        </a>
        <a href="/"> 
          <FaReact size={40} style={{ color: "#7AE3F8" }} />
        </a>
        <a href="/">
          <FaNodeJs size={40} style={{ color: "#7CB701" }} />
        </a>
        <a href="/">
          <FaNpm size={40} style={{ color: "#EB3C32" }} />
        </a>
        <a href="/">
          <FaYarn size={40} style={{ color: "#00F67E" }} />
        </a>
        <a href="/">
          <FaDatabase size={40} style={{ color: "#F6B524" }} />
        </a>
      </FooterBase>
    </>
  );
};

export default Footer;
