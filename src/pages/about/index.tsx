import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import PageDefault from "../../components/PageDefault";
import ImgPerfil from "../../assets/wesley.png";

import { Container, Content, Info, Painel } from "./styles";

//animação
const apperFromCenter = keyframes`
 from{
   opacity: 0;
   transform: translateX(50px);
 }
 to{
   opacity: 1;
   transform: translateX(0px);
 }
`;

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 20px;
    animation: ${apperFromCenter} 1s; //executando animação

    -webkit-box-shadow: -1px 6px 15px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 6px 15px 2px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 6px 15px 2px rgba(0, 0, 0, 0.75); ;
`;

const About: React.FC = () => {
    const [togleConteudos, setTogleConteudos] = useState(false);
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

    const handleTogle = () => {
        // setTogleConteudos(prev => !prev);
        setTogleConteudos(!togleConteudos);
    };

    return (
        <PageDefault>
            <Container>
                <Content>
                    <img src={ImgPerfil} alt="Wesley Guerra" />
                    <h1 className="typing-animation">Hello, I'm Wesley 👋</h1>
                    <Info>
                        <Content>
                            <div className="painel-header">
                                <div className="ball red"></div>
                                <div className="ball yellow"></div>
                                <div className="ball green"></div>
                            </div>
                            <Painel>
                                <p>
                                    Born in Salvador / BA, enthusiast of the
                                    best technologies in web development, mobile
                                    front-end and works as a developer.
                                </p>
                                <p>
                                    I've worked in places like SENAI, Petrobras,
                                    Correios, INEMA (currently at Compasso UOL)
                                    and some others. I have a degree in Systems
                                    Analysis and Development.
                                </p>
                                <p>
                                    I am passionate about working with
                                    challenging and creative projects. I don't
                                    like being in the comfort zone, so I look
                                    for myself constantly.
                                </p>
                                <p>
                                    I am passionate about working with
                                    challenging and creative projects. I don't
                                    like being in the comfort zone, so I look
                                    for myself constantly.
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
                                    <li>Testes</li>
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
