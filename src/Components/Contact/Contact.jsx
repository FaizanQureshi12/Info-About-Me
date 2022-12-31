import React from "react";
import './Contact.css'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = () => {

    const form = useRef();
    const [done,setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('qfaizan489@gmail.com', 'template_8z12zzn', form.current, 'IgPl5OQVtgEE5oKsx')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1"
                        style={{ background: '#ABF1FF94' }}>
                    </div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" required name="user_name" className="user" placeholder="Name" />
                    <input type="email" required name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" required className="user" placeholder="Message" />
                    <input type="submit" value='Send' className="button" />
                    <span>{done && 'Thanks for Contact me'}</span>
                    <div className="blur c-blur1"
                        style={{ background: 'var(--purple)' }}>

                    </div>
                </form>

            </div>
        </div>
    )
}
export default Contact 