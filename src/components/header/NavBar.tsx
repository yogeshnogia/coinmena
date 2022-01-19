import { NavLink } from 'react-router-dom';
const Navbaricon = () => {
    return (
        <div className="con_strip">
            <ul className="link_con">
                <li>
                    <NavLink to="/repositories">Repositories</NavLink>
                </li>
                <li>
                    <NavLink to="/developers">Developers</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbaricon;