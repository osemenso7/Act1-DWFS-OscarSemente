import Icon from "./Icon.jsx";

import '../Styles/NavButton.css';

const NavButton = ({ icon, text, onCLick }) => {

    return (
        <button type="button" className="navButton btn" onClick={onCLick}>
            <Icon className="navButton__icon" icon={icon}/>
            <span className="navButton__text">{text}</span>
        </button>
    );
};

export default NavButton;
