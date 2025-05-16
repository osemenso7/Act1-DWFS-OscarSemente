import {useContext} from "react";

import {GlobalContext} from "../Context/GlobalContext.jsx";
import {FilterContext, FilterProvider} from "../Context/FilterContext.jsx";

import Filters from "../Components/Filters.jsx";
import Book from "../Components/Book.jsx";
import Cart from "../Components/Cart.jsx";

import '../Styles/BookSelector.css';

const BookSelectorContent = () => {
    const { books, showCart } = useContext(GlobalContext);
    const { genres } = useContext(FilterContext);

    return (
            <div className="bookSelector">
                <Filters/>
                <div className="bookSelector__books">
                    {books
                        .filter(book => book.genres.some(genre => genres.includes(genre)))
                        .map((bookItem) => (
                        <Book key={bookItem.id} book={bookItem} />
                    ))}
                </div>
                {(showCart) ? (
                    <Cart/>
                ) : null}
            </div>
    );
};

const BookSelector = () => {
    return (
        <FilterProvider>
            <BookSelectorContent />
        </FilterProvider>
    );
};

export default BookSelector;