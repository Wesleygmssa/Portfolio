import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";
// import ImgeGit from "../../assets/git.png";

import { Container, Content } from "./styles";

const About: React.FC = () => {
    return (
        <PageDefault>
            <Container>
                <Content>
                    <h1>Olá, Sou Wesley </h1>
                    <span>💻 Software Develope</span>
                    <div className="background-image"></div>
                </Content>
            </Container>
        </PageDefault>
    );
};

export default About;
