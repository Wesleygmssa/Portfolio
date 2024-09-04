import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import PageDefault from "../../components/PageDefault";
import ImgPerfil from "../../assets/wesleyguerra.png";
import { Container, Content, Info, Painel } from "./styles";

// Animation
const appearFromCenter = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 20px;
    animation: ${appearFromCenter} 1s; // Executing animation

    box-shadow: -1px 6px 15px 2px rgba(0, 0, 0, 0.75);
`;

const About: React.FC = () => {
    const [toggleConteudos, setToggleConteudos] = useState(false);
    const [valueInitialCss, setValueInitialCss] = useState(0);
    const [valueInitialReact, setValueInitialReact] = useState(0);
    const [valueInitialNode, setValueInitialNode] = useState(0);

    useEffect(() => {
        for (let i = 0; i <= 90; i++) {
            setTimeout(function () {
                setValueInitialCss(i);
                setValueInitialReact(i - 10);
                setValueInitialNode(i - 20);
            }, 3000);
        }
    }, []);

    const handleToggle = () => {
        setToggleConteudos(!toggleConteudos);
    };

    return (
        <PageDefault>
            <Container>
                <Content>
                    <div>
                        <img src={ImgPerfil} alt="Wesley Guerra" />
                        <h1>Hello, My name is Wesley👋</h1>
                    </div>

                    <Info>
                        <Content>
                            <div className="painel-header">
                                <div className="ball red"></div>
                                <div className="ball yellow"></div>
                                <div className="ball green"></div>
                            </div>
                            <Painel>
                                <p>
                                    Graduated in Systems Analysis and
                                    Development, acting as a Full Front-end
                                    Developer. On a journey of learning and
                                    continuous improvement, seeking to improve
                                    myself every day in development practices
                                    and studying the DevOps culture.
                                </p>
                                <h3>
                                    🚀 Currently doing Reckeatseat Bootcamp
                                    focusing on technologies:
                                </h3>
                                <ul>
                                    <li>Nodejs</li>
                                    <li>Nextjs</li>
                                    <li>React</li>
                                    <li>React Native</li>
                                    <li>TypeScript</li>
                                    <li>Docker</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </Painel>
                        </Content>
                    </Info>
                </Content>
            </Container>
        </PageDefault>
    );
};

export default About;
