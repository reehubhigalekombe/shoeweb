import React, {useState}from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import {menProducts, kidsProducts, womenProducts, sportProducts, slipsProducts, officialProducts, adidasProducts, crocsProducts, footerProducts, collectionsProducts,
  deckersProducts, clarksProducts, skechersProducts, louisProducts, pumaProducts } from "../Data/products";
import "../styles/shoedetails.css"
import WhatsApp  from '@mui/icons-material/WhatsApp';
function ShoeDetails() {
    const {id } = useParams()
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false)
    const [size, setSize] = useState(25)
    const allProducts = [...menProducts, ...kidsProducts, ...womenProducts, ...sportProducts, ...slipsProducts, ...officialProducts, ...adidasProducts,
       ...crocsProducts, ...deckersProducts, ...clarksProducts, ...louisProducts, ...skechersProducts, ...pumaProducts, ...footerProducts, ...collectionsProducts];

    const product =  allProducts.find((item) => item.id === parseInt(id));
    const navigate = useNavigate()
    if(!product) {
        return <h3>Product is not found!</h3>
    }
    const  handleOrder = async () => {
      setLoading(true)
    try {
      const response = await axios.post("https://mkcolectionsb-1.onrender.com/api/stkpush", {
        phone: "254708374149",
        amount: product.newPrice*quantity,
        size,
        quantity
      });
      console.log(response.data);
      alert("STK Push sent! Check your Phone");
      navigate("/")
    } catch(error)
    {
      console.error("STK Push Error:", error)
      alert("Failed to initiate payment: " + error?.response?.data.message || error.message)
    } finally{setLoading(false)}
    }
      const whatsAppNumber = "+254742106109";
      const whatsAppMessage  =  `Hello, I would like to order ${quantity} pairs of ${product.name} size ${size}. Is it available`
      const whatsAppURL = `http://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}  `
  return (
    <div className='shoedetails'>
      <img src={product.image}  alt={product.name} className='product-image'  />
      <h2>{product.name}</h2>
      <p>{product.size}</p> 
      <p className='price'>
<span className='oldPrice'>Ksh.{product.oldPrice}</span>
<span className='newPrice'>Ksh.{product.newPrice}</span>
      </p>
      <label>Quantity</label>
      <input type='number'
      value={quantity}
       min={1}
       step={1}
       onChange={(e) => setQuantity(Math.max(1, Number(e.target.value))) }
         defaultValue={1}/><br/>
      
      <label>
        The size of shoes:
      </label>
      <input type='number'
       value={size}
       min={25}
       max={47}
       step={1}

       onChange={(e) => {
        const newSize = Number(e?.target?.value);
        if  (newSize >=25 && newSize <=47) {
          setSize(newSize)
        }
       }
       } 
       /> <br/>

        <label>Order Via WhatsApp: </label>
<button > <a href={whatsAppURL} target='_blank' rel='noopener noreferrer'  ><WhatsApp style={{color: "green"}} /></a></button>
        <p>Mode of Payment:</p>
        <div className='payment-methods'>
        <button onClick={handleOrder} disabled={loading}>{loading ? "Processing...." : "MPESA"}</button> <br/>
    <button ><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer'>PAYPAlL</a></button>
    <button ><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer'>MASTER CARD</a></button>
        </div>  
    </div>
  )
}

export default ShoeDetails;


