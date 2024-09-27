import { useEffect } from 'react';

import "../css/Ticketing.css"

function Ticketing() {

    // Test d'un useEffect sur l'intégration via BilletWeb
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.billetweb.fr/js/export.js";
        script.async = true;
        document.body.appendChild(script);

        // Nettoyage lors du démontage
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="ticketing_container">
            <h2 className='ticketing_title'>Votre réservation</h2>
            <section className='ticketing_reservation'>
                <a
                    title='Vente de billet en ligne'
                    href="https://www.billetweb.fr/shop.php?event=theatre-poiteviniere"
                    className='shop_frame'
                    target='blank'
                    data-src="https://www.billetweb.fr/shop.php?event=theatre-poiteviniere"
                    data-max-width="90%"
                    data-initial-height="600"
                    data-scrolling="no"
                    data-id="theatre-poiteviniere"
                    data-resize="1" />
            </section>
        </div>
    )
};

export default Ticketing;
