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

const Footer: React.FC = () => {
  return (
    <>
      <FooterBase>
        <a>
          <FaHtml5 size={40} style={{ color: "#EB3C32" }} />
        </a>
        <a>
          <FaCss3 size={40} style={{ color: "#016EB6" }} />
        </a>
        <a>
          <FaReact size={40} style={{ color: "#7AE3F8" }} />
        </a>
        <a>
          <FaNodeJs size={40} style={{ color: "#7CB701" }} />
        </a>
        <a>
          <FaNpm size={40} style={{ color: "#EB3C32" }} />
        </a>
        <a>
          <FaYarn size={40} style={{ color: "#00F67E" }} />
        </a>
        <a>
          <FaDatabase size={40} style={{ color: "#F6B524" }} />
        </a>
      </FooterBase>
    </>
  );
};

export default Footer;
