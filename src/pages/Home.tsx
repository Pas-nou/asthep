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
                        <h3 className="slide_title slide_title_1">Les jeunes en piste !</h3>
                        <div className="slide_text_descriptif">
                            <p className="slide_text slide_text_1">l'ASTHEP et Y a du Pin sur les planches</p>
                            <p className="slide_text slide_text_1">vous présentent</p>
                            <p className="slide_text slide_text_1">le spectacle des jeunes & ados.</p>
                            <p className="slide_text slide_text_1">Représentations les :</p>
                            <p className="slide_text slide_text_1"><b>10</b> | <b>11</b> | <b>12</b> | <b>18</b> | <b>19</b></p>
                            <p className="slide_text slide_text_1">Avril.</p>
                            <p className="slide_text slide_text_1">Entrée gratuite !</p>
                        </div>
                        <NavLink className="slide_button_1" to="/billetterie">Réservez vos places</NavLink>
                    </div>
                    <img className="slide_image_1 slide_image_desktop" src="../../jeunes2026.webp" alt="Affiche du spectacle des jeunes/ados" />
                    <img className="slide_image_1 slide_image_mobile" src="../../jeunes2026.webp" alt="Affiche du spectacle des jeunes/ados" />
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