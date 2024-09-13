import { NavLink } from "react-router-dom";
import { useState } from "react";

import '../css/MenuBurger.css'

function MenuBurger() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // * Function to show/hide responsive menu
    const showResponsiveMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div id="topnav" className="topnav">

            {/* Home link */}
            <img src="../../public/Logo_asthep.png" alt="Logo ASTHEP" className="topnav_img" />

            {/* Burger icone */}
            <button
                id="topnav_hamburger_icon"
                className={isMenuOpen ? "open" : ""}
                onClick={showResponsiveMenu}
                aria-label="Menu burger"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Responsive menu, displayed or hidden depending on the state */}
            {/* {isMenuOpen && (
                <nav role="navigation" id="topnav_responsive_menu" className={`responsive_menu ${isMenuOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <NavLink className="topnav_link" to="/" onClick={showResponsiveMenu}>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink className="topnav_link" to="/billetterie" onClick={showResponsiveMenu}>Billetterie</NavLink>
                        </li>
                        <li>
                            <NavLink className="topnav_link" to="/historique" onClick={showResponsiveMenu}>Historique</NavLink>
                        </li>
                        <li>
                            <NavLink className="topnav_link" to="/contact" onClick={showResponsiveMenu}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            )} */}

        </div>
    )
};

export default MenuBurger;