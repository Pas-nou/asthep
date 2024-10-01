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
        adaptativeHeight: boolean;
        autoplay: boolean;
        autoplaySpeed: number;
        pauseOnHover: boolean;
    }

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptativeHeight: true,
        // autoplay: true,
        // autoplaySpeed: 4500,
        // pauseOnHover: true,
    }
    return (
        <section className="home_container">
            <Slider {...settings} className="home_slider">
                <article className="slide_container_1">
                    <div className="slide_text_container">
                        <h3 className="slide_title_1">SAISON 2024 OUVERTE !</h3>
                        <div className="slide_text_descriptif">
                            <p className="slide_text_1">l'ASTHEP vous présente une pièce</p>
                            <p className="slide_text_1">écrite et mise en scène par</p>
                            <p className="slide_text_1">Olivier Jollivet.</p>
                            <p className="slide_text_1">Représentations les :</p>
                            <p className="slide_text_1">09 | 10 | 15 | 16 | 17 | 19</p>
                            <p className="slide_text_1">22 | 23 | 24 | 29 | 30 </p>
                            <p className="slide_text_1">Novembre.</p>
                        </div>
                        <NavLink className="slide_button_1" to="/billetterie">Réservez vos places</NavLink>
                    </div>
                    <img className="slide_image_1" src="../../public/Affiche_fleur_ruines.jpg" alt="Affiche de la pièce de théâtre 'Une fleur sur les ruines'" />
                </article>
                <article className="slide_container_2">
                    <div>
                        <h3>Coucou 2</h3>
                        <p>Ici le texte de la slide</p>
                    </div>
                </article>
                <article className="slide_container_3">
                    <div>
                        <h3>Coucou 3</h3>
                        <p>Ici le texte de la slide</p>
                    </div>
                </article>
                <article className="slide_container_3">
                    <div>
                        <h3>Coucou 4</h3>
                        <p>Ici le texte de la slide</p>
                    </div>
                </article>
            </Slider>
        </section >
    );
};

export default Home;