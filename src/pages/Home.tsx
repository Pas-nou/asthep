import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Home.css'


function Home() {

    type Settings = {
        dots: boolean;
        lazyload: boolean;
        infinite: boolean;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
        adaptativeHeight: boolean;
        autoplay: boolean;
        autoplaySpeed: number;
        pauseOnHover: boolean;
    }

    const settings: Settings = {
        dots: true,
        lazyload: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptativeHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    }
    return (
        <section className="home_container">
            <Slider {...settings} className="home_slider">
                <article className="slide_container slide_container_1">
                    <div className="slide_text_container">
                        <h3 className="slide_title slide_title_1">SAISON 2024 OUVERTE !</h3>
                        <div className="slide_text_descriptif">
                            <p className="slide_text slide_text_1">l'ASTHEP vous présente une pièce</p>
                            <p className="slide_text slide_text_1">écrite et mise en scène par</p>
                            <p className="slide_text slide_text_1">Olivier Jollivet.</p>
                            <p className="slide_text slide_text_1">Représentations les :</p>
                            <p className="slide_text slide_text_1">09 | 10 | 15 | 16 | 17 | 19</p>
                            <p className="slide_text slide_text_1">22 | 23 | 24 | 29 | 30 </p>
                            <p className="slide_text slide_text_1">Novembre.</p>
                        </div>
                        <NavLink className="slide_button_1" to="/billetterie">Réservez vos places</NavLink>
                    </div>
                    <img className="slide_image_1 slide_image_desktop" src="../../Affiche_fleur_ruines.jpg" alt="Affiche de la pièce de théâtre 'Une fleur sur les ruines'" />
                    <img className="slide_image_1 slide_image_mobile" src="../../Affiche_web_mobile.png" alt="Affiche de la pièce de théâtre 'Une fleur sur les ruines'" />
                </article>
                <article className="slide_container slide_container_2">
                    <div className="slide_text_container">
                        <h3 className="slide_title slide_title_2">L'ASTHEP SUR LE WEB !</h3>
                        <div className="slide_text_descriptif">
                            <p className="slide_text slide_text_2">L'ASTHEP lance son site web !</p>
                            <p className="slide_text slide_text_2">Après le rafraîchissement de sa salle et de son logo,</p>
                            <p className="slide_text slide_text_2">la troupe se met au goût du jour</p>
                            <p className="slide_text slide_text_2">et vous propose un système de billetterie en ligne.</p>
                            <p className="slide_text slide_text_2">Vous pourrez également retrouver notre actualité,</p>
                            <p className="slide_text slide_text_2">l'historique des pièces jouées,</p>
                            <p className="slide_text slide_text_2">et plein d'autres choses à venir ! </p>
                        </div>
                    </div>
                    <img className="slide_image_2" src="../../Logo_asthep.png" alt="Logo de la troupe de l'ASTHEP" />
                </article>
            </Slider>
        </section >
    );
};

export default Home;