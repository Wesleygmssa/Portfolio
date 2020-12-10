import React from "react";
import { IconZap } from "./styles";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <IconZap>
      <a
        target="_blanck"
        href="https://twitter.com/guerra_ssa"
        style={{ backgroundColor: "#1F9EEB" }}
      >
        <FiTwitter
          size={25}
          style={{ color: "#fff", backgroundColor: "#1F9EEB" }}
        />
      </a>
      <a
        target="_blanck"
        href="https://github.com/Wesleygmssa"
        style={{ backgroundColor: "#000000" }}
      >
        <FiGithub
          size={25}
          style={{ color: "#fff", backgroundColor: "#000000" }}
        />
      </a>
      <a
        target="_blanck"
        href="https://www.linkedin.com/in/wesleyguerra09/"
        style={{ backgroundColor: "#0077B4" }}
      >
        <FiLinkedin size={25} style={{ color: "#fff" }} />
      </a>

      <a
        target="_blanck"
        style={{ backgroundColor: "#4AC558" }}
        href="https://api.whatsapp.com/send?phone=5571992538054&text=Ol%C3%A1%20meu%20nome%20%C3%A9"
      >
        <FaWhatsapp size={25} style={{ color: "#fff" }} />
      </a>
    </IconZap>
  );
};

export default Contact;
