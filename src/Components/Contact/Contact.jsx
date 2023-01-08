import React from "react";
import './Contact.css'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

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
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="contact-form" id="Contact">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color:darkMode? 'white':''}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1"
                        style={{ background: '#ABF1FF94' }}>
                    </div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" required name="user_name" minLength={3} maxLength="25" className="user" placeholder="Name" />
                    <input type="email" required name="user_email" minLength={5} maxLength={25} className="user" placeholder="Email" />
                    <textarea name="message" required className="user" minLength={4} maxLength="1000" placeholder="Message" />
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