import React, {useEffect, useState} from 'react';
import axios from "axios";

import Home from "./pages/Home";
import Sneakers from "./pages/Sneakers";
import Sport from "./pages/Sport";
import Newsletter from "./pages/Newsletter";
import Official from "./pages/Official";
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import Men from "./pages/Men";
import Slips from "./pages/Slips"
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Puma from './pages/Puma';
import Adidas from "./pages/Adidas";
import Louis from './pages/Louis';
import Clarks from './pages/Clarks';
import Skechers from './pages/Skechers';
import Collection from './pages/Collection';
import {
   BrowserRouter as Router,
  Routes,
  Route}  from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import Crocs from './pages/Crocs';
import Deckers from './pages/Deckers';
import FlaotingButton from './pages/FlaotingButton';
import ShoesInformation from './components/ShoesInformation';
import { GoogleMap } from '@react-google-maps/api';
import Location from "./pages/Location";
import ShoeDetails from './components/ShoeDetails';
import Auth from "./pages/Auth"
import PrivateRoute from './components/PrivateRoute';
import { Navigate } from 'react-router-dom';
function App() {

const [shoesData, setShoesData] = useState([]);

useEffect (() => {
  axios.get("https://mkcolectionsb-1.onrender.com/api/shoes")
  .then((response) => {
    console.log("Fetched Data from MongoDB:", response.data);
    setShoesData(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data from backend:", error);
  })
}, [] );
  return (
    <div className='App'> 
      <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Navigate to="/auth"/>}/>
    <Route path="/auth"  element={<Auth/>}/>
        <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path="/men"  element={<PrivateRoute><Men shoesData={shoesData}/></PrivateRoute>} />
        <Route path="/slips"  element={<PrivateRoute><Slips shoesData={shoesData} /></PrivateRoute>} />
        <Route path="/women" exact  element={<PrivateRoute><Women shoesData={shoesData}/></PrivateRoute>} />
<Route path="/kids"  element={<PrivateRoute><Kids/></PrivateRoute>} />
<Route path="/sport"   element={<PrivateRoute><Sport/></PrivateRoute>} />
<Route path="/official"   element={<PrivateRoute><Official/></PrivateRoute>} />
<Route path="/sneakers"  element={<PrivateRoute><Sneakers/></PrivateRoute>} />
<Route path="/collection"  element={<PrivateRoute><Collection/></PrivateRoute>} />
        <Route path="/newsletter"  element={<PrivateRoute><Newsletter/></PrivateRoute>}/>
        <Route path="/puma"   element={<Puma/>} />
        <Route path="/adidas" element={<Adidas/>} />
        <Route path="/crocs" element={<Crocs/>} />
        <Route path="/louis"  element={<Louis/>} />
        <Route path="/clarks"  element={<Clarks/>} />
        <Route path="/deckers"   element={<Deckers/>} />
        <Route path="/skechers"   element={<Skechers/>} />
        <Route path="/shoe.id"  element={<ShoesInformation/>} />
        <Route path="/search"   element={<SearchResults/>} />
        <Route path="/google"   element={<GoogleMap/>} />
        <Route path="/location"   element={<PrivateRoute><Location/></PrivateRoute>} />
        <Route path="/product/:id"   element={<ShoeDetails/>} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <FlaotingButton/>
      <Footer/>
    </Router>
    </div>
  )
}

export default App;
