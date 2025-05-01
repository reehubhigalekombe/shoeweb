import React, { useState } from 'react';
import "../styles/navbar.css";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import ReorderIcon from '@mui/icons-material/Reorder';
import Notifications from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className='navbar'>
      <div className='nav-top'>
        <div className='left'>
          <h3>MK COLLECTIONS</h3>
        </div>
        <div className='middle'>
          <div className='search-bar'>
          <SearchIcon className='search-icon' style={{ color: 'black', fontSize: '24px', marginRight: '8px' }} onClick={handleSearch} />
            <input
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder='Search for shoe item'
              className='search-input'
            />
  
          </div>
        </div>
        <div className='right'>
          <span className='contact'>+254 794 517132</span>
          <span className='icon'><ShoppingCart /></span>
          <span className='icon'><Notifications /></span>
          <button className='menu-toggle' onClick={toggleNavbar}><ReorderIcon /></button>
        </div>
      </div>
      <div className={`nav-bottom ${openLinks ? "open" : ""}`}>
        <Link to="/home" className='link'>Home</Link>
        <Link to="/men" className='link'>Men</Link>
        <Link to="/women" className='link'>Women</Link>
        <Link to="/kids" className='link'>Kids</Link>
        <Link to="/sport" className='link'>Sport</Link>
        <Link to="/official" className='link'>Official</Link>
        <Link to="/sneakers" className='link'>Sneakers</Link>
        <Link to="/slips" className='link'>Slips</Link>
        <Link to="/location" className='link'>Location</Link>
        <Link to="/newsletter" className='link'>Newsletter</Link>
      </div>
    </nav>
  );
}

export default Navbar;
