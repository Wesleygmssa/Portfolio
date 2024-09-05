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
                                    Development, and I work as a Senior
                                    Front-end Developer. For me, family is the
                                    foundation of everything, and it’s the
                                    pillar that motivates me every day. Besides
                                    my professional focus, I have a strong
                                    connection with sports, regularly practicing
                                    running, weight training, swimming, and
                                    football. I’m passionate about reading
                                    books, always exploring diverse topics that
                                    provide new learning experiences. Dancing,
                                    especially forró, is another one of my great
                                    passions. Traveling and meeting new people
                                    are experiences I greatly value, as I’m
                                    always seeking new friendships and
                                    challenges.
                                </p>
                                <p>
                                    I believe that the only limits we have are
                                    in our minds, and I follow the principle of
                                    continuous improvement, striving to grow a
                                    little more each day. Currently, I’m
                                    studying English at a basic level, aiming to
                                    expand my horizons and prepare for new
                                    international opportunities.
                                </p>

                                <h2>Versão em Português</h2>
                                <p>
                                    Sou graduado em Análise e Desenvolvimento de
                                    Sistemas e atuo como Desenvolvedor Front-end
                                    Sênior. Para mim, a família é a base de
                                    tudo, e esse é o alicerce que me motiva
                                    diariamente. Além do meu foco profissional,
                                    tenho uma forte conexão com o esporte,
                                    praticando corrida, musculação, natação e
                                    futebol regularmente. Tenho uma paixão por
                                    livros, sempre explorando temas diversos que
                                    me proporcionam novos aprendizados. Dançar,
                                    especialmente forró, é outra das minhas
                                    grandes paixões. Viajar e conhecer novas
                                    pessoas são experiências que valorizo muito,
                                    sempre em busca de novas amizades e
                                    desafios.
                                </p>
                                <p>
                                    Acredito que os únicos limites que temos
                                    estão na nossa mente, e por isso sigo o
                                    princípio de melhoria contínua, me
                                    esforçando para evoluir um pouco mais a cada
                                    dia. Atualmente, estou estudando inglês,
                                    ainda no nível básico, buscando expandir
                                    meus horizontes e me preparar para novas
                                    oportunidades internacionais.
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
