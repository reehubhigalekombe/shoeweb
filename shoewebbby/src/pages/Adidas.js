import React from 'react'
import "../styles/adidas.css"

import { Link } from 'react-router-dom';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import WhatsApp from '@mui/icons-material/WhatsApp';
import VisibilityOutlined from '@mui/icons-material/Visibility';
import {adidasProducts} from "../Data/products"


function Adidas() {
  return (
    <div className='adidas'>
      <div className='adidas-top'>
        <ul className='menu'>
          <li className='menuItem'><Link to="/home" className='link'>Home</Link></li>
          <li style={{ color: "white" }}>&gt;&gt;</li>
          <li className='menuItem'><Link to="/adids" className='link'>Adidas</Link></li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='bottom-left'> 
            <div className='brands'>
                    <p className='para'>BRANDS</p>
                    <p><Link to="/adidas" className='link'>&gt;Adidas</Link></p>
                    <p><Link to="/puma" className='link'>&gt;Puma</Link></p>
                    <p><Link to="/louis" className='link'>&gt;Louis Voitton</Link></p>
                    <p><Link to="/crocs" className='link'>&gt;Crocs</Link></p>
                    <p><Link to="/clarks" className='link'>&gt;Clarks</Link></p>
                    <p><Link to="/skechers" className='link'>&gt;Skechers</Link></p>
                    <p><Link to="/deckers" className='link'>&gt;Deckers Brands</Link></p>
                  </div>
        </div>
        <div className='bottom-right'>
          {adidasProducts.map((product) => (
            <div key={product.id} className='card'>
              <img src={product.image} alt={product.name} className='image' />
              <h3 className='size'> {product.sizes} </h3>
              <h3 className='name'>{product.name}</h3>
              <div className='priceContainer'>
                <span className='oldPrice'>Ksh.{product.oldPrice}</span>
                <span className='newPrice'>Ksh.{product.newPrice}</span>
              </div>
              <div >
                <ul className='menu'>
                  <li className='menuItem' ><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'gray' }}><VisibilityOutlined /></a></li>
                  <li className='menuItem' ><a href='https://wa.me/+254742106109' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'green' }}><WhatsApp /></a></li>
                  <li className='menuItem'><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'grey' }}><ShoppingBasket /></a>   </li>
                </ul>
              </div>
            </div>
          )

          )}

        </div>
      </div>

    </div>
  )
}

export default Adidas;
