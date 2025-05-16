import React from 'react';

import Filter from "./Filter.jsx";

import '../Styles/Filters.css';

const Filters = () => {
    const genres = ['Aventura', 'Fantasía', 'Romance', 'Terror', 'Comedia', 'Drama', 'Acción', 'Ciencia Ficción', 'No Ficción'];
    const authors = ['Brandon Sanderson', 'Stephen King', 'Colleen Hoover'];

    return (
        <div className="bookSelector_filters">
            <h5 className="filters__title">Búsqueda de filtros:</h5>
            <input type="search" className="filters_input" placeholder="Buscar filtro..."/>
            <hr className="filters__line"/>
            <Filter filterName="Género" filterList={genres}/>
            <hr className="filters__line"/>
            <Filter filterName="Autores" filterList={authors}/>
            <hr className="filters__line"/>
            <Filter filterName="Price" filterList={[]}/>
        </div>
    );
};

export default Filters;
