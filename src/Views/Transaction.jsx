import {useNavigate} from "react-router";
import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalContext.jsx";

import TransactionLabel from "../Components/TransactionLabel.jsx";
import BookCart from "../Components/BookCart.jsx";

import "../styles/Transaction.css";

const Transaction = () => {
    const { buyBooks, totalPrice, handleSetSelectedBook, handleSetShowCart } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleSubmitTransaction = (e) => {
        e.preventDefault();
        alert("Pago procesado!");
        handleSetSelectedBook(undefined, undefined);
        handleSetShowCart(false);
        navigate("/");
    }

    return(
        <div className="transaction">
            <form className="transaction__form" onSubmit={handleSubmitTransaction}>
                <h2 className="form__direction">Dirección de envío</h2>
                <hr className="form__line"/>
                <TransactionLabel title={"Nombres y Apellidos:"}/>
                <TransactionLabel title={"Dirección:"}/>
                <TransactionLabel title={"Provincia:"}/>
                <TransactionLabel title={"Ciudad:"}/>
                <div className="form__paisCPostal">
                    <div className="paisCPostal__pais">
                        <label className="pais__label">Pais:</label>
                        <input  className="pais__input" type="text" name="pais"></input>
                    </div>
                    <div className="paisCPostal__CPostal">
                        <label className="CPostal__label">Código Postal:</label>
                        <input  className="CPostal__input" type="text" name="CPostal"></input>
                    </div>
                </div>

                <h2 className="form__pay">Método de Pago:</h2>
                <hr className="form__line"/>
                <TransactionLabel title={"Número de la tarjeta:"}/>
                <TransactionLabel title={"Titular:"}/>
                <div className="form__dateCvv">
                    <div className="dateCvv__year">
                        <label className="pais__label">Año:</label>
                        <input  className="pais__input" type="number" name="año"></input>
                    </div>
                    <div className="dateCvv__month">
                        <label className="CPostal__label">Mes:</label>
                        <input  className="CPostal__input" type="number" name="mes"></input>
                    </div>
                    <div className="dateCvv__cvv">
                        <label className="CPostal__label">CVV:</label>
                        <input  className="CPostal__input" type="number" name="cvv"></input>
                    </div>
                </div>
                <button className="link__buyBtn btn" type="submit">Finalizar Compra</button>
            </form>
            <div className="transaction__list">
                <h2 className="list__title">Resumen de la compra</h2>
                <hr className="list__line"/>
                {buyBooks.map((item) => (
                    <BookCart key={item.book.id} book={item.book} quantity={item.numBooks} />
                ))}
                <h4 className="list__totalPrice">Total: {totalPrice.toFixed(2)}€</h4>
            </div>
        </div>
        );
    }

export default Transaction;