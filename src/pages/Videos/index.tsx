/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import data from '../../data/data.json';
import { useLocation } from 'react-router-dom';
import { Iframe } from './styles';

const Film = () => {
    const location = useLocation();
    const id = parseInt(location.pathname.replace('/', ''));
    const itemById = data.filter(item => item.id === id);
    console.log(itemById[0].key);
    return (
        <>
            <Iframe
                src={`https://www.youtube.com/embed/${itemById[0].key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </Iframe>

        </>
    );
};
export default Film;
