import styled from "styled-components";

export const PaginationWrapper = styled.nav`
    display: flex;
    justify-content: center;
    padding: 20px 0;

    .pagination {
        display: flex;
        list-style: none;
        padding: 0;
    }

    .page-item {
        margin: 0 5px;
    }

    .page-link {
        display: inline-block;
        padding: 10px 15px;
        background-color: #1d4ed8;
        color: #fff;
        border-radius: 5px;
        text-decoration: none;
        transition: background-color 0.3s ease;
        cursor: pointer;
    }

    .page-link:hover {
        background-color: #1e3a8a;
    }

    .active .page-link {
        background-color: #4f46e5; /* Cor diferenciada para a página atual */
        font-weight: bold;
        cursor: default; /* Remover o cursor de pointer na página ativa */
    }
`;
