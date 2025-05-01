
import React, {useState, useEffect, useMemo} from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import "../styles/search.css"
import WhatsApp  from '@mui/icons-material/WhatsApp';
import  VisibilityOutlined  from '@mui/icons-material/Visibility';
import ShoppingBasket  from '@mui/icons-material/ShoppingBasket';
import Facebook from '@mui/icons-material/Facebook';

function SearchResults() {
    const location = useLocation();
    const navigate = useNavigate();
    const [query, setQuery] = useState("")
    const [filteredShoes, setFilteredShoes] = useState([]);
   
    const backendURL = "https://mkcolectionsb-1.onrender.com"
    const shoes = useMemo(() => [
        {
          id: 1,
          image: `${backendURL}/uploads/images8.jpg`,
          sizes: "Sizes: 37 - 44",
          name: "Mens-Bright",
          oldPrice: 143,
          newPrice: 100,
        },
        {
          id: 2,
          image: `${backendURL}/uploads/images6.jpg`,
          sizes: "Sizes: 37 - 44",
          name: "Canvas",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 3,
          image: `${backendURL}/uploads/wm16.jpg`,
          sizes: "Sizes: 37 - 44",
          name: "Wedges",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 4,
          image: `${backendURL}/uploads/kidq.jpg`,
          sizes: "Sizes: 37 - 44",
          name: "Airforce",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 5,
          image: `${backendURL}/uploads/wm11.jpg`,
          sizes: "Sizes: 37 - 44",
          name: "Pumbs",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 6,
          image: `${backendURL}/uploads/slip6.webp`,
          sizes: "Sizes: 37 - 44",
          name: "Rubber-Ladies Black",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 7,
          image: `${backendURL}/uploads/slips om.webp`,
          sizes: "Sizes: 37 - 44",
          name: "High-Heel Open",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 8,
          image: `${backendURL}/uploads/slip01.webp`,
          sizes: "Sizes: 37 - 44",
          name: "Timber-Land Reinforced",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 9,
          image: `${backendURL}/uploads/slip8.webp`,
          sizes: "Sizes: 37 - 44",
          name: "Louis Vuiton",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 10,
          image: `${backendURL}/uploads/slip24.webp`,
          sizes: "Sizes: 37 - 44",
          name: "Mules",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 11,
          image: `${backendURL}/uploads/slip22.webp`,
          sizes: "Sizes: 37 - 44",
          name: "Tassel",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 12,
          image: `${backendURL}/uploads/slip23.webp`,
          sizes: "Sizes: 37 - 44",
          name: "Tom Ford",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 13,
          image: `${backendURL}/uploads/slip21.webp`,
          sizes: "Sizes: 37 - 44",
          name: "John Foster",
          oldPrice: 123,
          newPrice: 100,
        },
        {
          id: 14,
          image: `${backendURL}/uploads/slip26.webp`,
          sizes: "Sizes: 37 - 44",
          name: "Crocodile",
          oldPrice: 123,
          newPrice: 100,
        },
      ], []);
      
 
    useEffect (() => {
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get("query") || "";
        setQuery(searchQuery);
        const results = shoes.filter((shoe) => 
            shoe.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
     );
        setFilteredShoes(results);
    }, [location.search, shoes] 
) ;
const handleSearch = () =>{
    if (query.trim() !==""  ) {
        navigate(`?query=${query}`)
    }
};
const handleKeyPress = (e) => {
    if(e.key === "Enter") {
        handleSearch()
    }
}; 
return (
  <div className='search-container'>
<div className='search-box'>
    <div className='search-icon'>
    <SearchIcon className='search-icon' style={{ color: 'black', fontSize: '24px', marginRight: '8px' }}/>
      <input
      type='text'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyPress}
      placeholder='Search the shoe item'
       className='search-input'
      />

    </div>
</div>
        <h3>Your Search Results for: "{query}"</h3>
        <div className='results' >
            {filteredShoes.length > 0 ? (
                filteredShoes.map((shoe) => (
                    <div key={shoe.id} className='shoe-item'>
                        <img src={shoe.image} alt={shoe.name} className='image' />
                        <div>
                        <h3 className='sizes' >{shoe.sizes} </h3>
                        <h3 className='name'>{shoe.name} </h3>
                        </div>
                        <div className='priceContainer'>
        <span className='oldPrice'>Ksh.{shoe.oldPrice}</span>
        <span className='newPrice'>Ksh.{shoe.newPrice}</span>
      </div>
      <div className='card-style'>

     <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'gray' }}><VisibilityOutlined/></a>
   <a href='https://wa.me/+254742106109' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'green' }}><WhatsApp/></a>
   <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'grey' }}><ShoppingBasket/></a>
   <a href='https://wa.me/+254742106109' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'blue' }}><Facebook/></a>  
   </div>

                    </div>  
                ) ) 
            ): (
                    <p>No matching shoes found</p>
                )
            
            }

        </div>
        
      
    </div>

)
    
}

export default SearchResults
