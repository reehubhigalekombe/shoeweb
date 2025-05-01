import React from 'react';
import "../styles/footer.css";
import  X  from '@mui/icons-material/X';
import Facebook  from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
import LinkedIn  from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div  className='footer'>
      <div className='footer-top'>
      <div className='card-style'>
      <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={styles.icon}>    <Instagram/></a>
        <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={styles.icon}>   <Facebook/></a>
       <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={styles.icon}><X/></a> 
     <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={styles.icon}>    <YouTube/></a>
<a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={styles.icon}>  <LinkedIn/></a>
      </div>
      </div>
      <div className='footer-bottom'>
     <div className='footer-split'>
      <h2>Contact us </h2>
      <p>+254 794 517132</p>
      <p>sales@mkcollections.co.ke</p>
      <p>Dykio Plaza off Ngong Road</p>
      <p>Open  24hrs - 24/7</p>
      <p>Nairobi, Kenya</p>
     </div>
     <div className='footer-split'>
      <h2>About us</h2>
      <p style={{color: "#bbb"}}><Link to="/home" >Delivery policy</Link></p>
      <p><Link to="/home" className='link'>Terms & Conditions</Link></p>
      <p><Link to="/home" className='link'> Newsletter</Link></p>
      <p><Link to="/home" className='link'>Gift  Cards</Link></p>
      <p><Link to="/home" className='link'>Home</Link></p>
     </div>
     <div className='footer-split'>
      <h2>Quick Links</h2>
      <p><Link to="/home" className='link'>Blog</Link></p>
      <p><Link to="/home" className='link'>Delivery Location</Link></p>
      <p><Link to="/home" className='link'> Branches</Link></p>
      <p><Link to="/home" className='link'>Monthly Offers</Link></p>
      <p><a href='https://wa.me/+25474210610' target='_blank' rel='noopener noreferrer' className='link'>Shopping Guidance</a></p>
      </div>
     <div className='footer-split'>
      <h2>Branches</h2>
      <p><Link to="/home" className='link'>Nairobi</Link></p>
      <p><Link to="/home" className='link'>Machakos</Link></p>
      <p><Link to="/home" className='link'> Mombasa</Link></p>
      <p><Link to="/home" className='link'>Eldoret</Link></p>
      <p><Link to="/home" className='link'>Kakamega</Link></p>
     </div>
      </div>
      <div className='footer-bot'>
        <div className='authondication'>
          <h4>Accepted Payment Methods</h4>
          <ul>
            <li><a href='https://wa.me/+25474210610' target='_blank' rel='noopener noreferrer'><img src="https://mkcolectionsb-1.onrender.com/uploads/mpesa.png" alt='payment' /></a></li>
            <li><a href='https://wa.me/+25474210610' target='_blank' rel='noopener noreferrer'><img src="https://mkcolectionsb-1.onrender.com/uploads/cash.png" alt='payment' /></a></li>
            <li><a href='https://wa.me/+25474210610' target='_blank' rel='noopener noreferrer'><img src="https://mkcolectionsb-1.onrender.com/uploads/paypal.png" alt='payment' /></a></li>
          </ul>
        </div>
        <div className='authondication1'><h4>All Rights Reserved &copy;Musyoki2024</h4></div>
        <div className='authondication2'><h4>Designed and Developed by G-Space Technologies - Higal &copy;2025</h4></div>
      </div>
    </div>
  )
}
const styles = {
  icon: {
    color: "white",
    fontSize: "30px"
  }
}

export default Footer
