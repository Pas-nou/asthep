import "../css/Ticketing.css";
import "../App.css";

function Ticketing() {

    return (
        <div className="ticketing_container">
            <h2 className='ticketing_title'>Votre réservation</h2>
            <section className='ticketing_reservation'>
                    <iframe
                    title="Vente de billet en ligne"
                    className='shop_frame'
                    rel='noopener noreferrer'
                    src="https://www.billetweb.fr/shop.php?event=theatre-poiteviniere"
                    data-src="https://www.billetweb.fr/shop.php?event=theatre-poiteviniere"
                    width="100%"
                    data-max-width="90%"
                    height="885"
                    data-scrolling="yes"
                    scrolling="yes"
                    data-id="theatre-poiteviniere"
                    data-resize="1"
                    frameBorder="0"
                 />
            </section>
        </div>
    )
};

export default Ticketing;
