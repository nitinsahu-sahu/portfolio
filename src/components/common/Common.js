import React from 'react'
import linkedInIcon from '../../assets/img/nav-icon1.svg';
import facebookIcon from '../../assets/img/nav-icon2.svg';
import instaIcon from '../../assets/img/nav-icon3.svg';
import { ValidationError } from '@formspree/react';
const SocialLink = () => {
    return (
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/nitin-sahu-b3124919b" target="__blank" className="linkedin-icon"><img src={linkedInIcon} alt="" title="LinkedIn" /></a>
            <a href="https://www.facebook.com/nitin.sahu.100046/" className="facebook-icon"><img src={facebookIcon} alt="" title="Facebook" /></a>
            <a href="https://www.instagram.com/mr_sahuji_07/" className="insta-icon"><img src={instaIcon} alt="" title="Instagram" /></a>
        </div>
    )
}

const ContactFormFeild = ({ fieldname, onChange, value, type, id, prefix, state }) => {
    return (
        <>
            <label htmlFor={id}>
                {fieldname}
            </label>
            <input
                id={id}
                type={type}
                name={id}
            />
            <ValidationError
                prefix={prefix}
                field={id}
                errors={state.errors}
            />
        </>
    )
}
const ContactFormFeildTextArea = ({ id, prefix, state }) => {
    return (
        <>
            <textarea
                id={id}
                name={id}
                placeholder='Type your message..'
            />
            <ValidationError
                prefix={prefix}
                field={id}
                errors={state.errors}
            />
        </>
    )
}
export { SocialLink, ContactFormFeild, ContactFormFeildTextArea }