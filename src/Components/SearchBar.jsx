import '../Styles/SearchBar.css';

const SearchBar = () => {

    return (<>
        <select className="searchBar__select">
            <option value="todos">Todos</option>
            <option value="fantasia">Novela Fantástica</option>
            <option value="terror">Novela de Terror</option>
            <option value="romance">Novela Romántica</option>
            <option value="etc">...</option>
        </select>
        <input type="search" className="searchBar__input" placeholder=" Buscar por título, autor, género..."/>
    </>);
};

export default SearchBar;