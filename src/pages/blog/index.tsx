import React, { useState, useEffect } from "react";
import { Content, Cards, CardContent, Card, Title } from "./styles";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
import Pagination from "../../components/Paginacao";

interface IPost {
    id: number;
    title: string;
    content: string;
    date: string;
    author: string;
    image?: string; // Adicionado campo para imagem
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5); // Quantidade de posts por página

    // Array de posts fake para simulação
    const fakePosts: IPost[] = [
        {
            id: 1,
            title: "Como Instalar Docker",
            content:
                "Neste post, você aprenderá como instalar o Docker no seu sistema de maneira simples e rápida...",
            date: "2024-09-08",
            author: "Wesley Guerra",
            image: "http://logz.io/wp-content/uploads/2016/01/docker-facebook.png", // Exemplo de imagem
        },
        // {
        //     id: 2,
        //     title: "Aprendendo React",
        //     content:
        //         "Neste post, compartilho minha experiência aprendendo React e dicas úteis para quem está começando...",
        //     date: "2024-09-07",
        //     author: "Wesley Guerra",
        //     image: "https://via.placeholder.com/300x150?text=React+Learning", // Exemplo de imagem
        // },
        // Outros posts...
    ];

    useEffect(() => {
        // Simulando a chamada de API com os posts fake
        setPosts(fakePosts);
    }, []);

    // Paginação
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <PageDefault>
            <Content>
                <Title>Blog</Title>

                {posts.length < 1 && <p>Carregando posts...</p>}

                <Cards>
                    {currentPosts.map((post) => (
                        <Card key={post.id}>
                            <CardContent>
                                {/* Imagem do Post */}
                                <img src={post.image} alt={post.title} />
                                <h3>{post.title}</h3>
                                {/* Exibe um trecho maior do conteúdo */}
                                <p>{post.content.substring(0, 100)}...</p>
                                <p>
                                    <strong>{post.author}</strong> - {post.date}
                                </p>
                                <Link to={`/blog/${post.id}`}>
                                    <button>Ler mais</button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </Cards>

                <Pagination
                    reposPerPage={postsPerPage}
                    totalRepos={posts.length}
                    paginate={paginate}
                />
            </Content>
        </PageDefault>
    );
};

export default Blog;
