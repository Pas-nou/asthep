import { useRef } from 'react';
import emailjs from 'emailjs-com';

import '../css/Contact.css'

function Contact() {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e : any) => {
        e.preventDefault();
    
        emailjs.sendForm(
            `${import.meta.env.VITE_APP_EMAILJS_SERVICE_ID}`, 
            `${import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID}`, 
            form.current!, 
            `${import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY}`)

          .then((result) => {
              console.log(result.text);
              alert('Email envoyé avec succès!');
          }, (error) => {
              console.log(error.text);
              alert('Une erreur s\'est produite, veuillez réessayer.');
          });
      };

    return (
        <div className="contact_container">
            <h1 className='contact_title'>Formulaire de contact</h1>
            <form 
            ref={form}
            onSubmit={sendEmail}
            className='contact_reservation'>
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
                <button type='submit' className='contact_button'>Envoyer</button>
            </form>
        </div>
    )
};

export default Contact;