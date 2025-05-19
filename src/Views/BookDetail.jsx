import {useParams} from "react-router";
import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalContext.jsx";

import Icon from "../Components/Icon.jsx";
import Cart from "../Components/Cart.jsx";

import '../Styles/BookDetail.css';

const BookDetail = () => {
    const { bookId } = useParams();
    const { books, showCart, handleSetSelectedBook } = useContext(GlobalContext);

    const addBook = (book) => {
        handleSetSelectedBook(book, true);
    }

    const book = books.find(b => b.id.toString() === bookId);
    if (!book) {
        return <div className="movie-details">Pelicula no encontrada.</div>;
    }

    return (
        <div className="booksDetail">
            <div className="booksDetail__bookDetail">
                <img className="bookDetail__image" src={book.image} alt=""/>
                <div className="bookDetail__description">
                    <h1 className="description__info">{book.title}</h1>
                    <h4 className="description__info">{book.author}</h4>
                    <h6 className="description__info">
                        {book.genres
                            .filter((genre) => genre !== 'Todos')
                            .map((genre, index, array) => (
                                <span className="genres__genre" key={index}>
                                    {genre}{index < array.length - 1 ? ', ' : ''}
                                </span>
                        ))}
                    </h6>
                    <p className="description__synopsis">{book.synopsis}</p>
                    <div className="description__scorePrice">
                        <div className="scorePrice__score">
                            <h4 className="score__score">{book.score}/5</h4>
                            <Icon className="score__icon" icon={"bi bi-star-fill fs-5"}/>
                        </div>
                        <h4 className="scorePrice__price">{book.price}€</h4>
                    </div>
                    <button type="button" className="description__addBtn btn" onClick={() => addBook(book)}>Añadir</button>
                </div>
            </div>
            {(showCart) ? (
                <Cart/>
            ) : null}
        </div>
    );
}

export default BookDetail;