import React from "react";
import './ContactLinks.css';
import call from './call.svg';
import whatsapp from './whatsapp.svg';
import mail from './mail.svg';
import comment from './comment.svg';

function ContactLinks({mentor}){
    return(
        <div className = "links">

            <img className = "link-comment" src={comment} alt = 'comment'/>


            <a target="_blank" href={`mailto: ${mentor.email}`} rel="noreferrer"> 
                <img className = "link-mail" src={mail} alt = 'mail'/>
            </a>
            
            <img className = "link-call" src={call} alt = 'call'/>


            <a target="_blank" href={`https://wa.me/${mentor.number}`} rel="noreferrer">
                <img className = "link-whatsapp" src={whatsapp} alt = 'whatsapp'/>
            </a>
            
        </div>
    )
    
}

export default ContactLinks;