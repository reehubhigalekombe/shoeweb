import React from 'react'
import "../styles/whatsappButton.css"
import {FaPhone, FaWhatsapp} from 'react-icons/fa'
function FloatingButton() {
    const defaultMessage = "Hello our esteemed Customers! Welcome to MK Collection: How can I help you"
    const phoneNumber = "+254742106109";
  return (
    <div className='whatsappButton'>
      <a
       href={`https://wa.me/${254742106109}?text=${encodeURIComponent(
        defaultMessage
       )}`} target='_blank' rel='noopener noreferrer'  className='anchorr' >
       < FaWhatsapp className='myimage'/>
      </a>
<a  href={`tel: ${phoneNumber}`} className='anchorr1'
>
  <FaPhone className='myimage'/>
</a>
    </div>
  )
}

export default FloatingButton;
