import React, { useState, useEffect } from "react";
import {
    Content,
    Cards,
    CardContent,
    Card,
    GroupButton,
    Title,
    Technologies,
} from "./styles";
import PageDefault from "../../components/PageDefault";
import ButtonLink from "../../components/LinkButton";
import api from "../../services/api";
import Pagination from "../../components/Paginacao"; // Importa o componente de paginação

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
    image_url?: string; // Campo adicionado para imagem do projeto
    languages?: string; // Campo adicionado para armazenar linguagens
}

const Projects: React.FC = () => {
    const [repositories, setRepositories] = useState<IRepository[]>([]);
    const [currentPage, setCurrentPage] = useState(1); // Página atual
    const [reposPerPage] = useState(8); // Quantidade de repositórios por página

    useEffect(() => {
        async function getRepo() {
            const login = "Wesleygmssa";
            const reposResponse = await api.get<IRepository[]>(
                `/users/${login}/starred`
            );

            function isBigEnough(value: any) {
                return value?.owner?.login === login;
            }

            const filtered = reposResponse.data.filter(isBigEnough);

            // Para cada repositório, buscar as linguagens
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

    // Índices dos repositórios na página atual
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repositories.slice(indexOfFirstRepo, indexOfLastRepo);

    // Função para mudar de página
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <PageDefault>
            <Content>
                {/* Título adicionado aqui */}
                <Title>Projetos de Estudos</Title>

                {repositories.length < 1 && (
                    <div className="content-loading">
                        <img
                            src="http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif"
                            alt="loading"
                        />
                    </div>
                )}

                <Cards>
                    {currentRepos.map((data) => (
                        <Card key={data.id}>
                            {/* Imagem do projeto */}
                            <CardContent>
                                <h3>{data.name}</h3>
                                <p>
                                    {data.description ? (
                                        data.description
                                    ) : (
                                        <div>Without description</div>
                                    )}
                                </p>
                                {/* Exibe as linguagens com estilização */}
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
                                        Source code
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
