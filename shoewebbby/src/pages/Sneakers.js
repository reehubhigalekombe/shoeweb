import React from 'react'
import "../styles/sneakers.css"
import { Link } from 'react-router-dom';
import WhatsApp  from '@mui/icons-material/WhatsApp';
import  VisibilityOutlined  from '@mui/icons-material/Visibility';
import ShoppingBasket  from '@mui/icons-material/ShoppingBasket';
import Facebook from '@mui/icons-material/Facebook';
import {sneakersProducts} from "../Data/products"
function Sneakers() {
  return (
    <div className="kids">
    <div className='kids-top'>
    <ul className='menu'>
  <li className='menuItem'><Link to="/home" className='link'>Home</Link></li>
  <li style={{color: "white"}}>&gt;&gt;</li>
  <li className='menuItem'><Link to="/sneakers" className='link'>Sneakers</Link></li>
</ul>
    </div>
    <div className='bottom'>
    <div className='bottom-left'>
<div className='categories'>
    <p className='para'>CATEGORIES</p>
     <p><Link to="/crocs" className='link'>&gt;Air Force Shoes</Link></p>
                <p><Link to="/crocs" className='link'>&gt;Sneakers for Men</Link></p>
                <p><Link to="/crocs" className='link'>&gt;Sneakers for Women</Link></p>
                <p><Link to="/crocs" className='link'>&gt;Sneakers for Kid</Link></p>
                <p><Link to="/crocs" className='link'>&gt;Air Max Shoes</Link></p>
                <p><Link to="/crocs" className='link'>&gt;Jordan Shoes</Link></p>
  </div>
  <div className='brands'>
        <p className='para'>BRANDS</p>
                  <p><Link to="/crocs" className='link'>&gt;Adidas</Link></p>
                  <p><Link to="/puma" className='link'>&gt;Puma</Link></p>
                  <p><Link to="/crocs" className='link'>&gt;Louis Voitton</Link></p>
                  <p><Link to="/crocs" className='link'>&gt;Crocs</Link></p>
                  <p><Link to="/crocs" className='link'>&gt;Clarks</Link></p>
                  <p><Link to="/crocs" className='link'>&gt;Skechers</Link></p>
                  <p><Link to="/crocs" className='link'>&gt;Deckers Brands</Link></p>
                  <p><Link to="/crocs" className='link'></Link></p>
    </div>
    </div>
    <div className='bottom-right'>
      {sneakersProducts.map((product) => (
        <div key = {product} className='card'>
            <Link to={`/product/${product.id}`} className='product-link' >
            <img src={product.image} alt={product.name} className='image'/>
          <h3 className='sizes' >{product.sizes} </h3>
      <h3 className='name'>{product.name} </h3>
      <div className='priceContainer'>
        <span className='oldPrice'>Ksh.{product.oldPrice}</span>
        <span className='newPrice'>Ksh.{product.newPrice}</span>
      </div>
            </Link>
      <div className='card-style'>
      <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'gray' }}><VisibilityOutlined/></a>
   <a href='https://wa.me/+254742106109' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'green' }}><WhatsApp/></a>
   <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'grey' }}><ShoppingBasket/></a>
   <a href='https://wa.me/+254742106109' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'blue' }}><Facebook/></a>      
   </div>
        </div>

      ))

      }

    </div>
    </div>
    </div>
  )
}

export default Sneakers;
