import React from 'react';
import './Contact.css';
import undrawContactImage from './Images/undraw-contact.svg';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mbjvovaw");

  return (
    <div className='contact-main'>
      <h1>Contact <span className='colored-text'>Me</span> </h1>
      <div className="contact-form-main">
        <div className='contact-form'>
          <div className="contact-form-left">
            <h1>Let's talk about tech!</h1>
            <p>Feel free to reach out to me with any inquiries, and I'll get back to you as soon as possible.</p>
            <img src={undrawContactImage} alt='Contact' className='contact-image' />
          </div>
          <div className="contact-form-right">
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mbjvovaw" method="POST">
              <div className='form-group'>
                <input type='text' id='name' name='name' placeholder='Name' required />
              </div>
              <div className='form-group'>
                <input type='email' id='email' name='_replyto' placeholder='Email' required />
              </div>
              <div className='form-group'>
                <input type='text' id='subject' name='subject' placeholder='Subject' required />
              </div>
              <div className='form-group'>
                <textarea id='message' name='message' rows='8' placeholder='Write your message' required />
              </div>
              <button type='submit' className='contact-button' disabled={state.submitting}>
                {state.succeeded ? 'Message Sent!' : 'Send Message'}
              </button>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
