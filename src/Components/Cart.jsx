import {useContext} from "react";
import {useNavigate} from "react-router";
import {GlobalContext} from "../Context/GlobalContext.jsx";

import BookCart from "./BookCart.jsx";

import '../Styles/Cart.css';

const Cart = () => {
    const { buyBooks, totalPrice } = useContext(GlobalContext);
    const navigate = useNavigate();

    const  handleCartBtn = () => {
        if (buyBooks.length > 0) {
            navigate("/transaction");
        } else {
            alert("No hay libros en la cesta!");
        }
    }

    return (
        <div className="bookSelector__cart">
            <h2 className="cart__title">Tu Cesta</h2>
            {(buyBooks.length > 0) ? (
                buyBooks.map((item) => (
                    <BookCart key={item.book.id} book={item.book} quantity={item.numBooks} showIcon={true} />
                ))
            ) : (
                <h5 className="cart__empty">No hay libros en la cesta.</h5>
            )}
            <h4 className="cart__totalPrice">Total: {totalPrice.toFixed(2)}€</h4>
            <button type="button" className="cart__button btn" onClick={handleCartBtn}>
                Finalizar Compra
            </button>
        </div>
    );
};

export default Cart;
