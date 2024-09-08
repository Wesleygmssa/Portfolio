import React, { useState, useEffect } from "react";
import {
    Content,
    Cards,
    CardContent,
    Card,
    Title,
    BlogDescription,
    HighlightSection,
    SearchInputContainer,
    SearchInput,
    StyledButton,
} from "./styles";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
import Pagination from "../../components/Paginacao";

interface IPost {
    id: number;
    title: string;
    content: string;
    date: string;
    author: string;
    image?: string;
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState("");

    const fakePosts: IPost[] = [
        {
            id: 1,
            title: "Como Instalar Docker",
            content:
                "Aprenda como instalar Docker no seu sistema de maneira simples e rápida. Um guia essencial para iniciantes e profissionais...",
            date: "2024-09-08",
            author: "Wesley Guerra",
            image: "http://logz.io/wp-content/uploads/2016/01/docker-facebook.png",
        },
        {
            id: 2,
            title: "Dicas de Inglês para Profissionais de TI",
            content:
                "Dicas práticas para melhorar seu inglês técnico e expandir suas oportunidades no mercado global de TI...",
            date: "2024-09-07",
            author: "Wesley Guerra",
            image: "https://via.placeholder.com/300x150?text=English+Tips",
        },
    ];

    useEffect(() => {
        setPosts(fakePosts);
    }, []);

    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <PageDefault>
            <Content>
                <HighlightSection>
                    <Title>Explore Conteúdos de Alta Qualidade em TI</Title>
                    <BlogDescription>
                        Descubra artigos valiosos sobre tecnologia,
                        desenvolvimento pessoal e dicas de inglês. Este blog é
                        projetado para profissionais de TI que desejam se
                        destacar, oferecendo conteúdos que vão além da técnica.
                    </BlogDescription>
                    <SearchInputContainer>
                        <SearchInput
                            type="text"
                            placeholder="Buscar posts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </SearchInputContainer>
                </HighlightSection>

                {filteredPosts.length < 1 && <p>Nenhum post encontrado.</p>}

                <Cards>
                    {currentPosts.map((post) => (
                        <Card key={post.id}>
                            <CardContent>
                                <img src={post.image} alt={post.title} />
                                <h3>{post.title}</h3>
                                <p>{post.content.substring(0, 100)}...</p>
                                <p>
                                    <strong>{post.author}</strong> - {post.date}
                                </p>
                                <Link to={`/blog/${post.id}`}>
                                    <StyledButton>Ler mais</StyledButton>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </Cards>

                <Pagination
                    reposPerPage={postsPerPage}
                    totalRepos={filteredPosts.length}
                    paginate={paginate}
                />
            </Content>
        </PageDefault>
    );
};

export default Blog;
