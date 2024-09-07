import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import PageDefault from "../../components/PageDefault";
import ImgPerfil from "../../assets/wesleyguerra.png";
import { Container, Content, Info, Painel as PainelOriginal } from "./styles";

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

const Highlight = styled.span`
    color: #ff6347;
    font-weight: bold;
`;

const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 20px;
    animation: ${appearFromCenter} 1s;
    box-shadow: -1px 6px 15px 2px rgba(0, 0, 0, 0.75);
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
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ff4500;
    }
`;

const Painel = styled(PainelOriginal)`
    padding: 2rem 1.5rem;
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
        }
    }

    /* Centralizando o botão */
    display: flex;
    flex-direction: column;
    align-items: center;

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

// Status
const Status = styled.p`
    font-size: 1.2rem;
    color: #ff4500; /* Cor chamativa para destacar o status */
    text-align: center;
    margin-top: 10px;
    font-style: italic;
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
                        <h1>Hello, I'm Wesley👋</h1>
                    </div>

                    {/* Adicionando o Status abaixo do título */}
                    <Status>
                        Chasing dreams and breaking limits, full steam ahead! 💥
                    </Status>

                    <Info>
                        <Content>
                            {/* <div className="painel-header">
                                <div className="ball red"></div>
                                <div className="ball yellow"></div>
                                <div className="ball green"></div>
                            </div> */}
                            <Painel>
                                {/* <h2>English Version</h2>
                                <p>
                                    I am a Senior Front-end Developer with
                                    extensive experience in technologies such as
                                    React, Node.js, React Native, and Next.js. I
                                    also work on back-end development, creating
                                    complete solutions that efficiently
                                    integrate front-end and back-end systems.
                                    Currently, I focus on building interactive
                                    maps and geospatial systems aimed at
                                    visualizing geographic data from Bahia. My
                                    career has been marked by the development of
                                    web applications, mobile apps, and APIs that
                                    make a difference in users' lives.
                                </p>
                                <p>
                                    I hold a degree in Systems Analysis and
                                    Development, and my foundation has always
                                    been my family, which gives me the strength
                                    and motivation to face everyday challenges.
                                    In my free time, I am passionate about
                                    sports, practicing running, weightlifting,
                                    swimming, and football. Additionally, I have
                                    a passion for books and dancing, especially
                                    forró. Traveling and making new friends are
                                    experiences that enrich and challenge me to
                                    always improve. I firmly believe that limits
                                    are self-imposed, which is why I follow the
                                    principle of continuous improvement,
                                    striving to evolve a little more every day.
                                    Currently, I am improving my English skills,
                                    aiming to expand my horizons and prepare for
                                    international opportunities.
                                </p> */}

                                <h2>Versão em Português</h2>
                                <p>
                                    Desenvolvedor Front-end Sênior, com ampla
                                    expertise em tecnologias como React,
                                    Node.js, React Native e Next.js, também atuo
                                    no desenvolvimento de back-end, entregando
                                    soluções completas que conectam front e
                                    back-end de forma eficiente e fluida. Ao
                                    longo da minha trajetória, passei por
                                    diversas empresas que agregaram valor e
                                    contribuíram significativamente para o meu
                                    crescimento profissional, consolidando a
                                    experiência que aplico no desenvolvimento de
                                    soluções robustas e inovadoras. Atualmente,
                                    estou focado na criação de mapas interativos
                                    e sistemas geoespaciais que transformam a
                                    visualização de dados geográficos da Bahia,
                                    impactando positivamente a tomada de
                                    decisões.
                                </p>
                                <p>
                                    Minha jornada profissional é sustentada por
                                    uma sólida formação em Análise e
                                    Desenvolvimento de Sistemas, sempre guiada
                                    pela base familiar, que me fortalece e
                                    motiva a enfrentar os desafios diários. Fora
                                    do ambiente de trabalho, sou movido pela
                                    paixão por esportes, praticando corrida,
                                    musculação, natação e futebol. A leitura e a
                                    dança, especialmente o forró, também são
                                    grandes fontes de prazer e energia. Viajar e
                                    conhecer novas culturas alimenta meu
                                    espírito aventureiro, me inspirando a buscar
                                    o novo e evoluir constantemente. Acredito
                                    que nossos únicos limites são os que impomos
                                    a nós mesmos. Por isso, sigo o princípio da
                                    melhoria contínua, sempre buscando aprender
                                    e evoluir. Atualmente, estou aprimorando
                                    minhas habilidades em inglês, com o objetivo
                                    de abrir portas para oportunidades globais e
                                    novos desafios internacionais.
                                </p>
                                <h3>
                                    🚀 Currently doing{" "}
                                    <Highlight>MSI</Highlight> Bootcamp focusing
                                    on technologies:
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

                                {/* Botão de download centralizado */}
                                <DownloadButton
                                    href="/curriculo.pdf"
                                    download="curriculo-wesley-guerra"
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
