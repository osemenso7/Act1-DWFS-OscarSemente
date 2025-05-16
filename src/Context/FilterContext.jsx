import React, { createContext, useState } from 'react';

import useGenres from "../Hooks/useGenres.jsx";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [selectedGenre, setSelectedGenre] = useState({ genre: 'Todos', checked: undefined });
    const { genres } = useGenres(selectedGenre);

    const handleSetSelectedGenre = (genre, checked) => {
        setSelectedGenre({ genre, checked });
    }

    return (
        <FilterContext.Provider value={{ selectedGenre, genres, handleSetSelectedGenre }}>
            {children}
        </FilterContext.Provider>
    );
};
