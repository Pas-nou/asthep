import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    }
    return (
        <section className="home_container">
            <Slider {...settings} className="home_slider">
                <div className="test_1">
                    <h2>Coucou 1</h2>
                    <p>Ici le texte de la slide</p>
                </div>
                <div className="test_2">
                    <h2>Coucou 2</h2>
                    <p>Ici le texte de la slide</p>
                </div>
                <div className="test_3">
                    <h2>Coucou 3</h2>
                    <p>Ici le texte de la slide</p>
                </div>
                <div className="test_4">
                    <h2>Coucou 4</h2>
                    <p>Ici le texte de la slide</p>
                </div>
            </Slider>
        </section>
    );
};

export default Home;