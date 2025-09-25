import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Home.css'


function Home() {

    type Settings = {
        dots: boolean;
        infinite: boolean;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
        autoplay: boolean;
        autoplaySpeed: number;
        pauseOnHover: boolean;
    }

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    }
    return (
        <section className="home_container">
            <h1 className="visually-hidden">Bienvenue sur le site de la troupe de théâtre de La Poitevinière</h1>
            <Slider {...settings} className="home_slider">
                <section className="slide_container slide_container_1">
                    <div className="slide_text_container">
                        <h3 className="slide_title slide_title_1">SAISON 2025 OUVERTE !</h3>
                        <div className="slide_text_descriptif">
                            <p className="slide_text slide_text_1">l'ASTHEP vous présente <b>Panique au Plazza</b></p>
                            <p className="slide_text slide_text_1">de <b>Ray Cooney</b></p>
                            <p className="slide_text slide_text_1">et mis en scène par <b>Olivier Jollivet</b>.</p>
                            <p className="slide_text slide_text_1">Représentations les :</p>
                            <p className="slide_text slide_text_1"><b>08</b> | <b>09</b> | <b>11</b> | <b>15</b> | <b>16</b> </p>
                            <p className="slide_text slide_text_1"><b>22</b> | <b>23</b> | <b>25</b> | <b>28</b> | <b>29</b> </p>
                            <p className="slide_text slide_text_1">Novembre.</p>
                        </div>
                        <NavLink className="slide_button_1" to="/billetterie">Réservez vos places</NavLink>
                    </div>
                    <img className="slide_image_1 slide_image_desktop" src="../../piece_2025.webp" alt="Affiche de la pièce de théâtre 'Une fleur sur les ruines'" />
                    <img className="slide_image_1 slide_image_mobile" src="../../piece_2025.webp" alt="Affiche de la pièce de théâtre 'Une fleur sur les ruines'" />
                </section>
                <article className="slide_container slide_container_2">
                    <div className="slide_text_container">
                        <h3 className="slide_title slide_title_2">L'ASTHEP SUR LE WEB !</h3>
                        <div className="slide_text_descriptif">
                            <p className="slide_text slide_text_2">Vous voulez être au courant de nos dernières actualités ?</p>
                            <p className="slide_text slide_text_2">Retrouvez-nous sur :</p>
                            <p className="slide_text slide_text_2">- Instagram</p>
                            <p className="slide_text slide_text_2">- Facebook</p>
                            <p className="slide_text slide_text_2">Vous pourrez également retrouver très prochainement,</p>
                            <p className="slide_text slide_text_2">l'historique des pièces jouées dans notre future rubrique "Historique"</p>

                        </div>
                    </div>
                    <img className="slide_image_2" src="../../Logo_asthep.webp" alt="Logo de la troupe de l'ASTHEP" />
                </article>
            </Slider>
        </section >
    );
};

export default Home;