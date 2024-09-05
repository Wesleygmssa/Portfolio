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
    color: #ff6347; /* Escolha uma cor mais chamativa */
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

// Painel ajustado
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

    /* Responsividade */
    @media (max-width: 768px) {
        padding: 1.5rem 1rem;

        h2 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }

        ul {
            li {
                font-size: 1rem;
            }
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

        ul {
            li {
                font-size: 0.9rem;
            }
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

                    <Info>
                        <Content>
                            <div className="painel-header">
                                <div className="ball red"></div>
                                <div className="ball yellow"></div>
                                <div className="ball green"></div>
                            </div>
                            <Painel>
                                <h2>English Version</h2>
                                <p>
                                    I hold a degree in Systems Analysis and
                                    Development, currently working as a Senior
                                    Front-end Developer. I believe that family
                                    is the foundation of everything. Beyond my
                                    professional focus, I enjoy practicing
                                    various sports like running, gym, swimming,
                                    and football.
                                </p>
                                <p>
                                    I also love reading books on different
                                    subjects, and I have a passion for dancing,
                                    especially forró. Traveling and making new
                                    friends are always on my list of priorities
                                    as I'm constantly seeking new challenges. I
                                    believe that the only limits we have are in
                                    our minds, and I follow the principle of
                                    continuous improvement, striving to grow and
                                    get better every day.
                                </p>

                                <h2>Versão em Português</h2>
                                <p>
                                    Sou graduado em Análise e Desenvolvimento de
                                    Sistemas e atuo como Desenvolvedor Front-end
                                    Sênior. Além do meu foco profissional,
                                    acredito que a família é a base de tudo.
                                    Gosto de praticar diversos esportes, como
                                    corrida, academia, natação e futebol.
                                </p>
                                <p>
                                    Amo ler livros sobre variados temas e sou
                                    apaixonado por dançar, especialmente forró.
                                    Viajar e fazer novas amizades estão sempre
                                    na minha lista de prioridades, pois estou
                                    constantemente em busca de desafios.
                                    Acredito que o que nos limita é a nossa
                                    mente, e sigo o princípio de melhoria
                                    contínua, buscando crescer e melhorar todos
                                    os dias.
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
                            </Painel>
                        </Content>
                    </Info>
                </Content>
            </Container>
        </PageDefault>
    );
};

export default About;
