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
        <div id="topnav" className={isMenuOpen ? "open" : ""}>

            <section id="topnav_head" className={isMenuOpen ? "open" : ""}>

                {/* Home link */}
                <div className="topnav_info_desktop">
                    <NavLink to="/">
                        <img src="../../Logo_asthep.webp" alt="Logo ASTHEP" className="topnav_img" />
                    </NavLink>
                    <section className="topnav_social_desktop">
                        <NavLink to="/">
                            <img src="../../Youtube_blanc.webp" alt="Logo youtube" />
                        </NavLink>
                        <NavLink to="/">
                            <img src="../../Instagram_blanc.webp" alt="Logo Instagram" />
                        </NavLink>
                        <NavLink to="/">
                            <img src="../../Facebook_blanc.webp" alt="Logo Facebook" />
                        </NavLink>
                    </section>
                    <p className="topnav_copyright_desktop">Copyright © 2024 - ASTHEP</p>
                </div>

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
            </section>

            {/* Responsive menu, displayed or hidden depending on the state */}
            <section id="topnav_text" className={isMenuOpen ? "open" : ""}>
                <nav role="navigation" id="topnav_menu" className={isMenuOpen ? "open" : ""}>
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? "topnav_link active" : "topnav_link")} to="/" onClick={showResponsiveMenu}>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? "topnav_link active" : "topnav_link")} to="/billetterie" onClick={showResponsiveMenu}>Billetterie</NavLink>
                        </li>
                        {/* <li>
                            <NavLink className={({ isActive }) => (isActive ? "topnav_link active" : "topnav_link")} to="/historique" onClick={showResponsiveMenu}>Historique</NavLink>
                        </li> */}
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? "topnav_link active" : "topnav_link")} to="/contact" onClick={showResponsiveMenu}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="topnav_infos_mobile">
                        <section className="topnav_social_mobile">
                            <NavLink to="/">
                                <img src="../../Youtube.png" alt="Logo youtube" />
                            </NavLink>
                            <NavLink to="/">
                                <img src="Instagram.png" alt="Logo Instagram" />
                            </NavLink>
                            <NavLink to="/">
                                <img src="../../Facebook.png" alt="Logo Facebook" />
                            </NavLink>
                        </section>
                        <p className="topnav_copyright_mobile">Copyright © 2024 - ASTHEP</p>
                    </div>
                </nav>
            </section>

        </div>
    )
};

export default MenuBurger;