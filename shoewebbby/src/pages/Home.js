import React from 'react';
import "../styles/home.css";
import { Link } from 'react-router-dom';
import ImageContainer from "../pages/ImageContainer"
function Home() {
  return (
    <div className='home-page'>
      <div className='home-tp'>
<video autoPlay loop muted playsInline className='videoBackground'>
  <source src='https://mkcolectionsb-1.onrender.com/uploads/house.mp4' type="video/mp4" />
  Your browser does not support video tag
</video>
<div className='over-lay'>
  <h1>Discover Affordable Footwear at MK Collections  || We Make you look Classy, So light and Comfy!!🤗🙌🛍️</h1>
  <button className='button-share'>
    <Link to="/collection">Shop What's New &rarr;</Link>
  </button>
</div>
      </div>
      
      <div className='home-bt'>
      <div className='bottom1'>
        <h1>FEATURED PRODUCTS</h1>
<ImageContainer/>
<h1>BRANDS</h1>
      </div>
      <div className='bottom2'>
        <Link to="/louis"><img src="https://mkcolectionsb-1.onrender.com/louis.png" alt="voiton"/></Link>
        <Link to="/decker"><img src="https://mkcolectionsb-1.onrender.com/deka.png"  alt="voiton"/></Link>
        <Link to="/nike"><img src="https://mkcolectionsb-1.onrender.com/nike.png"  alt="voiton"/></Link>
        <Link to="/puma"><img src="https://mkcolectionsb-1.onrender.com/uploads/puml.png" alt="voiton"/></Link>
      </div>
      <div className='bottom3'>
      <h1>Join the MK Collections Family</h1>
     <h4 style={{fontWeight: "lighter", color: "red", fontSize: "35px"}}> FOR TRENDING COLLECTIONS</h4>
     <button style={{padding: "10px 35px", fontSize: "19px", backgroundColor: "red", border: "none"}}>
      <Link to="/newsletter" style={{textDecoration: "none", color: "white"}}>SUBCRIBE</Link></button>
      <p style={{ fontSize: "20px"}}>MK Collections provides quality footwear at pretty affordable price, you can shop online with
       immidiate delivery. </p>
       <p style={{ fontSize: "20px"}}>Consequently we help you find the perfect fit. MK Collection offers affordable &lt;
        <strong style={{color: "hsl(24, 90%, 57%)"}}>Men, Women, Kids and Sports&gt;</strong>
       shoes from one of the World reknown Retailers MK Collection Store has everything you could need from smart flats to 
       trainers, boots and the highest heels</p>
       <h2>Value for Money at MK Collection</h2>
      </div>
      </div>
    </div>
  )
}

export default Home

