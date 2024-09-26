import '../css/Contact.css'

function Contact() {
    return (
        <div className="contact_container">
            <h2 className='contact_title'>Formulaire de contact</h2>
            <form className='contact_reservation'>
                <label
                    htmlFor="firstname"
                    className='contact_label'
                >
                    Prénom :</label>
                <input
                    className='contact_input'
                    type="text"
                    id='firstname'
                    name='firstname'
                    placeholder='Prénom'
                    required />
                <label
                    htmlFor="name"
                    className='contact_label'
                >
                    Nom :</label>
                <input
                    className='contact_input'
                    type="text"
                    id='name'
                    name='name'
                    placeholder='Nom'
                    required />
                <label
                    htmlFor="email"
                    className='contact_label'
                >
                    Email :</label>
                <input
                    className='contact_input'
                    type="text"
                    id='email'
                    name='email'
                    placeholder='Email'
                    required />
                <label
                    htmlFor="email"
                    className='contact_label'
                >
                    Téléphone :</label>
                <input
                    className='contact_input'
                    type="text"
                    id='phone'
                    name='phone'
                    placeholder='Numéro de téléphone'
                />
                <label
                    htmlFor="message"
                    className='contact_label'
                >
                    Votre message :</label>
                <textarea
                    className='contact_textaera'
                    name="message"
                    id="message"
                    placeholder='votre message'
                    required />
                <button className='contact_button'>Envoyer</button>
            </form>
        </div>
    )
};

export default Contact;