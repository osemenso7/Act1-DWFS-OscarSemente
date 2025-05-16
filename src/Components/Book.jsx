import {useContext} from "react";
import {Link} from "react-router";
import {GlobalContext} from "../Context/GlobalContext.jsx";

import Icon from "./Icon.jsx";

import '../Styles/Book.css';

const Book = ({ book }) => {
    const { handleSetSelectedBook } = useContext(GlobalContext);

    const addBook = (book) => {
        handleSetSelectedBook(book, true);
    }

    return (
        <div className="books__book row">
            <img className="book__image" src={book.image} alt=""/>
            <hr className="book__line"/>
            <div className="book_description">
                <Link to={`/${book.id}`} className="description__titleLink">
                    {book.title}
                </Link>
                <div className="description__authorPrice">
                    <p className="authorPrice__author">{book.author}</p>
                    <p className="authorPrice__price">{book.price}€</p>
                </div>
                <div className="description__scoreAddBtn">
                    <div className="scoreAddBtn__score">
                        <p className="score__score">{book.score} </p>
                        <Icon className="score__icon" icon={"bi bi-star-fill"}/>
                    </div>
                    <button type="button" className="scoreAddBtn__addBtn btn" onClick={() => addBook(book)}>Añadir</button>
                </div>
            </div>
        </div>
    );
}

export default Book;