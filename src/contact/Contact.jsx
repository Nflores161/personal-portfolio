import React from 'react'
import "./contact.css"
import Email from '../img/email.png'
import Phone from '../img/phone.png'
import Address from '../img/address.png'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


export const Contact = () => {

const formRef = useRef();
const [done, setDone] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault();

    emailjs
      .sendForm(
        'service_708b6ot', 
        'template_9nshqhh', 
        formRef.current, 
        'yOLapa3sKl31gpS3r'
        )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
    });
}

  return (
    <div className='contact'>
      <div className="contact-bg"></div>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1 className='contact-title'>
              Let's discuss your project
            </h1>
            <div className='contact-info'>
              <div className="contact-info-item">
                <img src={Phone} alt="phone" className="contact-icon" />
                +1 908 220 3213
              </div>
              <div className="contact-info-item">
                <img src={Email} alt="email" className="contact-icon" />
                nflores@gmail.com
              </div>
              <div className="contact-info-item">
                <img src={Address} alt="Address" className="contact-icon" />
                Located in Brooklyn NY 11237
              </div>
            </div>
          </div>
          <div className="contact-right">
            <p className="contact-description">
              <b>What's your story?</b> Get in contact. Always ready to help make your personal, business, or other ideas ideas come to life.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder='Name' name='user_name' />
              <input type="text" placeholder='Subject' name='user_subject' />
              <input type="text" placeholder='Email' name='user_email' />
              <textarea rows='5' placeholder='Message' name='message'></textarea>
              {!done ?
              <button type='submit'>Submit</button>
               : 
               'Message sent...thank you!' }
            </form>
          </div>
      </div>
    </div>
  )
}
