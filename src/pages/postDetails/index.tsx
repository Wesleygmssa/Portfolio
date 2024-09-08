import React from "react";
import { useParams } from "react-router-dom";
import {
    Content,
    PostContent,
    PostTitle,
    PostImage,
    PostBackground,
    AuthorInfo,
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
    {
        id: 2,
        title: "Práticas Eficazes para Memorizar Frases em Inglês",
        content: `
        <h2>Passo 1: Repetição Espacial</h2>
        <p>Essa técnica consiste em revisar frases em intervalos de tempo específicos. Por exemplo, após aprender uma frase, revise-a após 1 hora, depois no dia seguinte, depois de 3 dias, e assim por diante. Essa técnica ajuda a transferir a frase da memória de curto prazo para a de longo prazo.</p>

        <h2>Passo 2: Use a Frase em Diferentes Contextos</h2>
        <p>Não basta repetir a frase; você precisa usá-la em diferentes contextos. Tente usar a frase em uma conversa, escreva-a em um texto ou até mesmo crie diálogos fictícios onde ela se encaixe. Quanto mais você a usar, mais natural será lembrá-la.</p>

        <h2>Passo 3: Associe a Frase a uma Imagem ou Situação</h2>
        <p>O cérebro retém informações melhor quando associa palavras a imagens ou emoções. Quando aprender uma frase, tente visualizá-la em uma situação real. Isso fará com que a frase tenha mais significado e seja mais fácil de lembrar.</p>

        <h2>Passo 4: Crie Flashcards Digitais ou Físicos</h2>
        <p>Flashcards são uma das maneiras mais eficazes de memorizar frases. Você pode criar flashcards físicos ou usar apps como Anki ou Quizlet. No lado da frente, coloque a frase em inglês, e no verso, a tradução. Revise-os diariamente.</p>

        <h2>Passo 5: Mantenha um Diário de Frases</h2>
        <p>Escreva todas as novas frases que você aprender em um diário. Leia esse diário regularmente para reforçar o que aprendeu. Além disso, ao escrever à mão, você ativa diferentes partes do cérebro, o que ajuda na retenção da informação.</p>

        <h2>Próximos Passos</h2>
        <p>Memorizar frases em inglês requer prática e paciência. Continue aplicando essas técnicas regularmente, e você verá uma grande melhoria em sua capacidade de lembrar e usar frases no dia a dia. Lembre-se, a chave é consistência!</p>
        `,
        date: "2024-09-10",
        author: "Wesley Guerra",
        image: "https://via.placeholder.com/1200x600?text=English+Learning+Tips",
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
                <AuthorInfo>
                    <strong>{post.author}</strong> - {post.date}
                </AuthorInfo>
            </Content>
        </PostBackground>
    );
};

export default PostDetails;
