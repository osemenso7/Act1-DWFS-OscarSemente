import Icon from "./Icon.jsx";

import '../Styles/NavTitle.css';

const NavTitle = ({ icon, text }) => {

    return (<>
        <div className="navTitle">
            <Icon className="navTitle__icon" icon={icon}/>
            <span className="navTitle__text">{text}</span>
        </div>
    </>);
};

export default NavTitle;