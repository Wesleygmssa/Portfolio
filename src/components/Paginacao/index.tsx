import React from "react";
import { PaginationWrapper } from "./styles"; // Importando o estilo da paginação

interface PaginationProps {
    reposPerPage: number;
    totalRepos: number;
    paginate: (pageNumber: number) => void;
    currentPage: number; // Adicionando o parâmetro da página atual
}

const Pagination: React.FC<PaginationProps> = ({
    reposPerPage,
    totalRepos,
    paginate,
    currentPage,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationWrapper>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`page-item ${
                            currentPage === number ? "active" : ""
                        }`}
                    >
                        <a
                            onClick={(e) => {
                                e.preventDefault(); // Evita o comportamento padrão do link
                                paginate(number);
                            }}
                            href="!#"
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </PaginationWrapper>
    );
};

export default Pagination;
