import React from "react";
import { useParams } from "react-router-dom";
import {
    Content,
    PostContent,
    PostTitle,
    PostImage,
    PostBackground,
} from "./styles";
import PageDefault from "../../components/PageDefault";

interface IPost {
    id: number;
    title: string;
    content: string;
    date: string;
    author: string;
    image?: string;
}

const fakePosts: IPost[] = [
    {
        id: 1,
        title: "Como Instalar Docker",
        content: `
        <h2>Passo 1: O que é Docker?</h2>
        <p>Docker é uma plataforma para desenvolvedores e administradores de sistemas que ajuda a criar, gerenciar e executar aplicações em containers. Isso permite que o código funcione em qualquer ambiente, seja no desenvolvimento, testes ou produção.</p>

        <h2>Passo 2: Instalando o Docker</h2>
        <p>Para começar, vamos instalar o Docker em um sistema baseado em Linux (também funciona no Windows e macOS). Siga o comando abaixo:</p>
        <pre><code>sudo apt update\nsudo apt install docker-ce docker-ce-cli containerd.io</code></pre>

        <h2>Passo 3: Verificando a instalação</h2>
        <p>Após instalar, verifique se o Docker está funcionando corretamente com o seguinte comando:</p>
        <pre><code>sudo docker --version</code></pre>

        <h2>Passo 4: Executando seu primeiro container</h2>
        <p>Agora vamos rodar um container com a famosa imagem <strong>hello-world</strong> para garantir que tudo está funcionando:</p>
        <pre><code>sudo docker run hello-world</code></pre>

        <h2>Passo 5: Próximos passos</h2>
        <p>Docker é uma ferramenta muito poderosa e esses são apenas os primeiros passos. Explore mais criando seus próprios containers e imagens! Consulte a documentação oficial para aprofundar seu conhecimento.</p>
        `,
        date: "2024-09-08",
        author: "Wesley Guerra",
        image: "https://via.placeholder.com/1200x600?text=Docker+Installation+Guide",
    },
];

const PostDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Pega o ID da URL
    const post = fakePosts.find((p) => p.id === Number(id));

    if (!post) {
        return <p>Post não encontrado</p>;
    }

    return (
        <PostBackground>
            <PostImage src={post.image} alt={post.title} />
            <Content>
                <PostTitle>{post.title}</PostTitle>
                <PostContent
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <p>
                    <strong>{post.author}</strong> - {post.date}
                </p>
            </Content>
        </PostBackground>
    );
};

export default PostDetails;
