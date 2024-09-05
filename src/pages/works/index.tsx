import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Container, Content } from "./styles";
import imageGeoBahia from "../../assets/geobahia.png"; // Imagem do GeoBahia
import latmeask from "../../assets/latmeask.png"; // Imagem do GeoBahia

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
            {
                title: "Crie salas de Q&A ao-vivo",
                description: "Tire as dúvidas da sua audiência em tempo-real",
                link: "https://relaxed-jones-75aff8.netlify.app/",
                technologies: ["HTML", "CSS", "React", "Netlify"],
                image: latmeask,
            },
        ];

        setProjects(currentProjects);
    }, []);

    return (
        <PageDefault>
            <Container>
                <Content>
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
