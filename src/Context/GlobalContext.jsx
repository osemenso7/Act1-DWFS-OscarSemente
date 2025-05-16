import React, { createContext, useState } from 'react';
import { books as books } from '../data/BooksData';

import useBuyBooks from "../Hooks/useBuyBooks.jsx";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [selectedBook, setSelectedBook] = useState({ book: undefined, sum: undefined });
    const { buyBooks, totalPrice } = useBuyBooks(selectedBook);

    const handleSetShowCart = (boolShowCart) => {
        if (boolShowCart) {
            setShowCart(prev => !prev)
        } else {
            setShowCart(boolShowCart);
        }
    }

    const handleSetSelectedBook = (book, sum) => {
        setSelectedBook({ book, sum });
    }

    return (
        <GlobalContext.Provider value={{ books, selectedBook, showCart, buyBooks, totalPrice, handleSetSelectedBook, handleSetShowCart }}>
            {children}
        </GlobalContext.Provider>
    );
};
