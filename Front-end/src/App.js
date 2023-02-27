import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import SitesList from "./components/SitesList.jsx"
import AddSite from "./components/AddSite.jsx";
import Booking from "./components/Booking.jsx";
import AboutUs from "./components/AboutUs.jsx";
import { Route, Routes} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const URL="http://localhost:3000/sites";
const fetchHandler= async()=>{
  return await axios.get(URL)
               .then((res)=> res.data)
               .catch((err)=>console.log(err))
}

function App() {
  const [sites, setsites]=useState([]);
  useEffect(()=>{
    fetchHandler().then(data=>setsites(data))}
  ,[] )
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <SitesList sites={sites}/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/addsite" element={<AddSite/>} exact />
          <Route path="/booking" element={<Booking/>} exact />
          <Route path="/aboutus" element={<AboutUs/>} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
