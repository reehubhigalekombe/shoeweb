import React, {useState}from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {products} from "../Data/products"
import "../styles/shoedetails.css"
function Woman() {
    const {id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const product =  products.find((item) => item.id === parseInt(id));
    const navigate = useNavigate()
    if(!product) {
        return <h3>Product is not found!</h3>
    }
    const  handleOrder = () => {
      alert(`You have ordered ${quantity} pairs of $product.name}`)
      navigate("/")
    }
  return (
    <div className='shoedetails'>
      <img src={product.image}  alt={product.name} className='product-image'  />
      <h2>{product.name}</h2>
      <p>{product.sizes}</p>
      <p className='price'>
<span className='oldPrice'>Ksh.{product.oldPrice}</span>
<span className='newPrice'>Ksh.{product.newPrice}</span>
      </p>
      <label>Quantity</label>
      <input type='number' min="1"  defaultValue={1}/>
      
      <label>
        The size os shoes:
      </label>
      <input type='number'
       value={quantity}
       min={1}
       onChange={(e) => setQuantity(e.target.value) } 
       />
        <button onClick={handleOrder}  >Order</button>  
        <p>Mode of Payment:
        <select>
        <option>Cash</option>
        <option>MPESA</option>
        <option>Paypal</option>
      </select>
      
      </p>
      
    </div>
  )
}

export default Woman;
