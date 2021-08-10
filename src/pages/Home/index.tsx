import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";

import { Container, Content } from "./styles";

const About: React.FC = () => {
    return (
        <PageDefault>
            <Container>
                <Content>
                    <h1>Olá, Sou Wesley </h1>
                    <span>Desenvolvedor de softwares</span>
                </Content>
            </Container>
        </PageDefault>
    );
};

export default About;
