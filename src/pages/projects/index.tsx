import React, { useState, useEffect } from "react";
import {
    Content,
    Cards,
    CardContent,
    Card,
    GroupButton,
    Title,
    Technologies,
    Description,
} from "./styles";
import PageDefault from "../../components/PageDefault";
import ButtonLink from "../../components/LinkButton";
import api from "../../services/api";
import Pagination from "../../components/Paginacao";

interface IUser {
    avatar_url: string;
    login: string;
    name: string;
    bio: string;
    location: string;
    company: string;
    twitter_username: string;
}

interface IRepository {
    id: number;
    name: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
    description: string;
    owner: IUser;
    login: string;
    image_url?: string;
    languages?: string;
}

const Projects: React.FC = () => {
    const [repositories, setRepositories] = useState<IRepository[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(8);

    useEffect(() => {
        async function getRepo() {
            const login = "Wesleygmssa";
            const reposResponse = await api.get<IRepository[]>(
                `/users/${login}/starred`
            );

            const filtered = reposResponse.data.filter(
                (value) => value?.owner?.login === login
            );

            const projectsWithLanguages = await Promise.all(
                filtered.map(async (repo) => {
                    const languagesResponse = await api.get<{
                        [key: string]: number;
                    }>(`/repos/${login}/${repo.name}/languages`);
                    const languages = Object.keys(languagesResponse.data).join(
                        ", "
                    );

                    return {
                        ...repo,
                        image_url: repo.image_url
                            ? repo.image_url
                            : "https://via.placeholder.com/300x150?text=No+Image",
                        languages,
                    };
                })
            );

            setRepositories(projectsWithLanguages);
        }
        getRepo();
    }, []);

    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repositories.slice(indexOfFirstRepo, indexOfLastRepo);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <PageDefault>
            <Content>
                <Title>Projetos de Estudos</Title>
                <Description>
                    Estes projetos foram desenvolvidos utilizando um conjunto de
                    tecnologias modernas e eficientes para o desenvolvimento web
                    e mobile. No front-end, utilizamos <strong>React</strong> e{" "}
                    <strong>React Native</strong> para criar interfaces
                    dinâmicas e responsivas tanto para web quanto para
                    dispositivos móveis. A base da lógica e interatividade dos
                    sistemas foi construída com <strong>JavaScript</strong>. No
                    back-end, contamos com <strong>Node.js</strong>,{" "}
                    <strong>SpringBoot</strong>, <strong>Java</strong> e{" "}
                    <strong>Python</strong>, oferecendo alta performance e
                    segurança. Além disso, utilizamos{" "}
                    <strong>bancos de dados relacionais</strong> e
                    não-relacionais para armazenamento e gerenciamento das
                    informações, garantindo flexibilidade e escalabilidade.
                </Description>

                {repositories.length < 1 && (
                    <div className="content-loading">
                        <div className="loading-spinner"></div>
                    </div>
                )}

                <Cards>
                    {currentRepos.map((data) => (
                        <Card key={data.id}>
                            <CardContent>
                                <h3>{data.name}</h3>
                                <p>
                                    {data.description ? (
                                        data.description
                                    ) : (
                                        <div>Without description</div>
                                    )}
                                </p>
                                <Technologies>
                                    <strong>Tecnologias:</strong>{" "}
                                    {data.languages
                                        ? data.languages
                                              .split(", ")
                                              .map((tech) => (
                                                  <span key={tech}>{tech}</span>
                                              ))
                                        : "Não especificado"}
                                </Technologies>
                                <GroupButton>
                                    <ButtonLink href={data.html_url}>
                                        Código fonte
                                    </ButtonLink>
                                </GroupButton>
                            </CardContent>
                        </Card>
                    ))}
                </Cards>

                <Pagination
                    reposPerPage={reposPerPage}
                    totalRepos={repositories.length}
                    paginate={paginate}
                />
            </Content>
        </PageDefault>
    );
};

export default Projects;
