import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Container, Content } from "./styles";
import imageGeoBahia from "../../assets/geobahia.png"; // Imagem do GeoBahia

// Definindo a estrutura de um projeto, agora com imagem
interface Project {
    title: string;
    description: string;
    link: string;
    technologies: string[];
    image: string;
}

const About: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        // Projetos carregados
        const currentProjects: Project[] = [
            {
                title: "GeoBahia",
                description:
                    "Sistema de mapeamento geoespacial para visualização de dados geográficos da Bahia.",
                link: "http://mapa.geobahia.ba.gov.br/",
                technologies: ["Mapas", "Geoespacial", "WebGIS"],
                image: imageGeoBahia, // Usando a imagem importada do GeoBahia
            },
            // {
            //     title: "Concurso de Fotografia - Inema",
            //     description:
            //         "Concurso de fotografia para todos os técnicos do Inema para exposição de fotos que retratem a temática água (os desafios e as belezas encontradas em campo) pelos colaboradores. Além de uma apresentação cultural com um artista de rua (poesia, música, cordel) que aborde a temática água.",
            //     link: "https://romantic-bell-a1abca.netlify.app/",
            //     technologies: ["HTML", "CSS", "Netlify"],
            //     image: "",
            // },
        ];

        setProjects(currentProjects);
    }, []);

    return (
        <PageDefault>
            <Container>
                <Content>
                    <h1>Hello, I'm Wesley</h1>
                    <span>💻 Software developer</span>
                    <div className="background-image"></div>

                    {/* Seção de Projetos Atuais */}
                    <section>
                        <h2>Projetos Atuais</h2>
                        <ul>
                            {projects.map((project, index) => (
                                <li key={index}>
                                    <img
                                        src={project.image}
                                        alt={`Imagem do projeto ${project.title}`}
                                    />
                                    <div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <p>
                                            <strong>Tecnologias:</strong>{" "}
                                            {project.technologies.join(", ")}
                                        </p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Acessar Projeto
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </Content>
            </Container>
        </PageDefault>
    );
};

export default About;
