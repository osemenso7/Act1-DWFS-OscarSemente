import { useState, useEffect } from 'react';

const useGenres = (selectedGenre) => {
    const [genres, setGenres] = useState([]);

    const handleGenres = (selectedGenre) => {
        let selectedGenreTemp = [...genres];

        if (selectedGenre.checked) {
            if (selectedGenre.genre === 'Todos') {
                selectedGenreTemp = ['Todos'];
            } else {
                selectedGenreTemp.push(selectedGenre.genre);
                if (selectedGenreTemp.includes('Todos')) {
                    selectedGenreTemp = selectedGenreTemp.filter(item => item !== 'Todos');
                }
            }
        } else {
            selectedGenreTemp = selectedGenreTemp.filter(genre => genre !== selectedGenre.genre);
            if (selectedGenreTemp.length === 0) {
                selectedGenreTemp.push('Todos');
            }
        }

        setGenres(selectedGenreTemp);
    };

    useEffect(() => {
        handleGenres(selectedGenre);
    }, [selectedGenre]);

    return { genres };
};

export default useGenres;
