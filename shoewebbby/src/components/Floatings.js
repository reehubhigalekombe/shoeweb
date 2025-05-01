import React from 'react';
import "../styles/floatings.css"
import { FaFacebookMessenger, FaWhatsapp, FaPhone } from 'react-icons/fa'
function Floatings() {
    const facebookUsername = "Higal Ekombe";
    const whatsAppNumber  = "+254742106109";
    const phoneNumber = "+254742106109";
  return (
    <div className='floating1'>
          <a href={`https://wa.me/${whatsAppNumber}`} 
    tartget="_blank" rel='noopener noreferrer'
    className='floaters2'
    ><FaWhatsapp/></a>
    <a href={`https://m.me/${facebookUsername}`} 
    tartget="_blank" rel='noopener noreferrer'
    className='floaters'
    ><FaFacebookMessenger/></a>
    <a href={`tel:${phoneNumber}`} className='floaters3'><FaPhone/></a>
    </div>
  )
}

export default Floatings