import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import PageDefault from "../../components/PageDefault";
import ImgPerfil from "../../assets/wesleyguerra.png";
import { Container, Content, Info, Painel as PainelOriginal } from "./styles";

// Animação de gradiente no título
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Animação de entrada do conteúdo
const appearFromCenter = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Efeito de pulso no botão
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Estilo para o nome e status
const Name = styled.h1`
    font-size: 3rem;
    text-align: center;
    background: linear-gradient(45deg, #ff6347, #1e90ff, #32cd32);
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientAnimation} 5s ease infinite;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Status = styled.p`
    font-size: 1.5rem;
    color: #ff4500;
    text-align: center;
    font-style: italic;
    margin-bottom: 30px;
    animation: ${pulse} 1.5s infinite; /* Status com efeito de pulso */

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

// Imagem de perfil com borda e efeito de hover
const PerfilImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #ff6347;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    margin-bottom: 20px;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 150px;
        height: 150px;
    }
`;

const DownloadButton = styled.a`
    display: inline-block;
    padding: 15px 30px;
    background-color: #ff6347;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
    animation: ${pulse} 2s infinite;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ff4500;
    }
`;

const Painel = styled(PainelOriginal)`
    padding: 2rem 1.5rem;
    animation: ${appearFromCenter} 1s ease;
    h2 {
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
    }
    p {
        margin-bottom: 1.5rem;
        line-height: 1.8;
        font-size: 1.2rem;
    }
    ul {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        li {
            margin: 0.5rem 1rem;
            font-size: 1.2rem;
            transition: transform 0.3s ease, color 0.3s ease;
            &:hover {
                color: #ff6347;
                transform: translateY(-5px);
            }
        }
    }

    @media (max-width: 768px) {
        padding: 1.5rem 1rem;
        h2 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
        }
        ul li {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
        h2 {
            font-size: 1.3rem;
        }
        p {
            font-size: 0.9rem;
        }
        ul li {
            font-size: 0.9rem;
        }
    }
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

    return (
        <PageDefault>
            <Container>
                <Content>
                    <PerfilImage src={ImgPerfil} alt="Wesley Guerra" />
                    <Name>Hello, I'm Wesley Guerra👋</Name>
                    <Status>
                        Chasing dreams and breaking limits, full steam ahead! 💥
                    </Status>

                    <Info>
                        <Content>
                            <Painel>
                                <h2>Versão em Português</h2>
                                <p>
                                    Desenvolvedor Front-end, com sólida
                                    experiência em tecnologias como React,
                                    Node.js, React Native e Next.js. Também atuo
                                    no desenvolvimento de back-end, entregando
                                    soluções completas que integram o front e o
                                    back-end de maneira eficiente e harmoniosa.
                                    Ao longo da minha trajetória, passei por
                                    várias empresas que agregaram valor e
                                    impulsionaram meu crescimento profissional,
                                    consolidando o conhecimento que aplico na
                                    criação de soluções inovadoras e robustas.
                                    Atualmente, meu foco está no desenvolvimento
                                    de mapas interativos e sistemas
                                    geoespaciais, transformando a visualização
                                    de dados geográficos da Bahia e contribuindo
                                    para decisões estratégicas.
                                </p>
                                <p>
                                    Minha trajetória é construída sobre uma base
                                    sólida em Análise e Desenvolvimento de
                                    Sistemas, e encontro motivação nos desafios
                                    do dia a dia. Fora do ambiente profissional,
                                    sou apaixonado por esportes como corrida,
                                    musculação, natação e futebol. A leitura e a
                                    dança, especialmente o forró, são grandes
                                    fontes de energia e inspiração. Viajar,
                                    conhecer novas culturas e compartilhar
                                    momentos com a família alimentam meu
                                    espírito aventureiro, impulsionando meu
                                    crescimento pessoal e profissional. Acredito
                                    que nossos limites são aqueles que impomos a
                                    nós mesmos, e por isso, sigo o princípio da
                                    melhoria contínua, sempre buscando aprender
                                    e evoluir.
                                </p>
                                <h3>
                                    🚀 Atualmente no Bootcamp{" "}
                                    {/* <Highlight>MSI</Highlight> focado em: */}
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

                                <DownloadButton
                                    href="/wesley_guerra.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Baixar Currículo
                                </DownloadButton>
                            </Painel>
                        </Content>
                    </Info>
                </Content>
            </Container>
        </PageDefault>
    );
};

export default About;
