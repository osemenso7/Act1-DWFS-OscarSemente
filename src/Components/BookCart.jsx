import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalContext.jsx";

import Icon from "./Icon.jsx";

import "../Styles/BookCart.css";

const bookCart = ({ book, quantity, showIcon }) => {
    const { handleSetSelectedBook } = useContext(GlobalContext);

    const removeBook = (book) => {
        handleSetSelectedBook(book, false);
    }

    return (
        <div className="cart__bookToBuy">
            <img className="bookToBuy__image" src={book.image} alt=""/>
            <div className="bookToBuy__description">
                <h6 className="description__title">{book.title}</h6>
                <p className="description__quantity">Cantidad: {quantity}</p>
            </div>
            <p className="bookToBuy__price">{book.price}€</p>
            {(showIcon ? (
                <button type="button" className="bookToBuy__delete btn" onClick={() => removeBook(book)}>
                    <Icon className="bookToBuy__deleteIcon" icon={"bi bi-trash3"}/>
                </button>
            ) : null)}
        </div>
    );
}

export default bookCart;