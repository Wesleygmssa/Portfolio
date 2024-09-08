import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Container, Content, SectionDescription } from "./styles";
import imageGeoBahia from "../../assets/geobahia.png";
import imageGeodados from "../../assets/geodados.png";
import latmeask from "../../assets/latmeask.png";

interface Project {
    title: string;
    description: string;
    link: string;
    technologies: string[];
    image: string;
    disabled?: boolean;
}

const About: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const currentProjects: Project[] = [
            {
                title: "GeoBahia",
                description:
                    "Sistema de mapeamento geoespacial para visualização de dados geográficos da Bahia.",
                link: "http://mapa.geobahia.ba.gov.br/",
                technologies: ["Mapas", "Geoespacial", "WebGIS"],
                image: imageGeoBahia,
            },
            {
                title: "GeoDados",
                description:
                    "Projeto focado em geoprocessamento e análise de dados geoespaciais, oferecendo ferramentas robustas para manipulação de informações geográficas.",
                link: "",
                technologies: ["HTML", "CSS", "Node.js", "Sequelize", "EJS"],
                image: imageGeodados,
                disabled: true,
            },
            {
                title: "Crie salas de Q&A ao-vivo",
                description: "Tire as dúvidas da sua audiência em tempo-real.",
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
                    <h2>Trabalhos Recentes</h2>
                    <SectionDescription>
                        Aqui estão alguns dos trabalhos em que atuei
                        recentemente, utilizando as tecnologias mais modernas do
                        mercado, como React, Node.js, Next.js, Leaflet e outras.
                        Esses projetos destacam minha experiência em
                        desenvolvimento web e geoprocessamento, sempre buscando
                        aplicar soluções inovadoras para atender às necessidades
                        do cliente.
                    </SectionDescription>
                    <section>
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
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Acessar Projeto
                                            </a>
                                        )}
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
