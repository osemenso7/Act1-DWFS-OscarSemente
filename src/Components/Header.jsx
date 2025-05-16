import React, {useContext} from 'react';
import {GlobalContext} from "../Context/GlobalContext.jsx";

import NavTitle from "./NavTitle.jsx";
import SearchBar from "./SearchBar.jsx";
import NavButton from "./NavButton.jsx";

import '../Styles/Header.css';

const Header = () => {
    const { handleSetShowCart } = useContext(GlobalContext);

    const showCart = () => {
        handleSetShowCart(true);
    };

    return (
        <header id="header row">
            <nav className="header__nav row">
                <div className="nav__title col-3">
                    <NavTitle className="title" icon="bi bi-bookmark-check fs-4" text="Relatos de Papel" />
                </div>
                <div className="nav__searchBar col-6">
                    <SearchBar className="searchBar" />
                </div>
                <div className="nav__buttons col-3">
                    <NavButton className="buttons__cartButton col" icon="bi bi-bag-heart fs-5" text="Cesta" onCLick={showCart}/>
                    <NavButton className="buttons__accountButton col" icon="bi bi-person fs-5" text="Mi Cuenta"/>
                </div>
            </nav>
        </header>
    );
};

export default Header;
