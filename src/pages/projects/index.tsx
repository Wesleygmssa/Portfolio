import React, { useState } from "react";
import {
    Content,
    Cards,
    CardContent,
    Icons,
    ButtonGroup,
    Card,
    Tec,
} from "./styles";
import PageDefault from "../../components/PageDefault";
import datas from "../../data/data.json";
import ButtonLink from "../../components/LinkButton";
import { Icon } from "../../components/Icon";
import { FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import Button from "../../components/Button";
import { useEffect } from "react";
import api from "../../services/api";

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
    owner: IUser; //Tipando um objeto
    login: string;
}

const Projects: React.FC = () => {
    const [repositories, setRepositories] = useState<IRepository[]>([]);

    console.log(repositories);

    useEffect(() => {
        async function getRepo() {
            const reposResponse = await api.get<IRepository[]>(
                `wesleygmssa/starred`
            );

            function isBigEnough(value: any) {
                return value?.owner?.login === "Wesleygmssa";
            }

            const filtered = reposResponse.data.filter(isBigEnough);
            console.log(filtered);

            setRepositories(filtered);
        }
        getRepo();
    }, []);

    return (
        <PageDefault>
            <Content>
                <Cards>
                    {repositories.map((data) => (
                        <Card key={data.name}>
                            <CardContent>
                                <h3>{data.name}</h3>
                                <p>{data.description}</p>

                                {/* <Tec>
                                    {data.tec?.map((item) => (
                                        <div>{item}</div>
                                    ))}
                                </Tec> */}

                                <ButtonGroup>
                                    <ButtonLink href={data.html_url}>
                                        Código Fonte
                                    </ButtonLink>
                                </ButtonGroup>
                            </CardContent>
                        </Card>
                    ))}
                </Cards>
            </Content>
        </PageDefault>
    );
};
export default Projects;
