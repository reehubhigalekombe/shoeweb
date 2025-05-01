import React, {useState} from 'react'
import "../styles/shoesInformation.css"
import { useParams, useNavigate } from 'react-router-dom';
import { allProducts } from '../Data/products';
function ShoesInformation() {
    const {id} =useParams();
    const shoe = allProducts.find((shoe) =>shoe.id === parseInt(id))
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()
    if (!shoe) return <h2>The your are searching cannot be found</h2>
    const handleOrder = () => {
        alert(`You've ordered ${quantity} pairs of ${shoe.name}`);
        navigate("/")
    }
  return (
    <div className='shoesInformation'>
      <h1>{shoe.name}</h1>
      <img src={shoe.image} alt={shoe.name} width='200'/>
      <p>Price: Ksh.{shoe.Price}</p>
      <p>Available Sizes: ${shoe.sizes}</p>
     <p>Mode of Payment:
      <select>
        <option>Cash</option>
        <option>MPESA</option>
        <option>Paypal</option>
      </select>
      </p>
      <label>
        Th e number of Shoes chosed:
      </label>
      <input type='number'
       value={quantity}
       min={1}
       onChange={(e) => setQuantity(e.target.value) } 
       />
        <button onClick={handleOrder}  >Order</button>  
      
    </div>
  )
}

export default ShoesInformation
