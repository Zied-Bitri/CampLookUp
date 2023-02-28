import React from 'react'
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import SitesList from "./components/SitesList.jsx"
import AddSite from "./components/AddSite.jsx";
import Booking from "./components/Booking.jsx";
import AboutUs from "./components/AboutUs.jsx";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [sites, setsites]=useState([]);
  
  useEffect(()=>{
          axios.get("http://localhost:5000/sites")
               .then((res)=> {setsites(res.data);
                console.log(res);})
               .catch((err)=>console.log(err))}
  ,[] )
  const addSite = (site) => {
    console.log(site);
    axios
    .post('/site', site)
    .then(data => {
      console.log(data)
      setsites([...sites, data]);
      //history('/');
    })
    .catch(err => console.log(err));
  };
  return (
    <React.Fragment>
      <header>
       <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/sites" element={<SitesList sites={sites}/>} exact />
          <Route path="/addsite" element={<AddSite/>} exact />
          <Route path="/booking" element={<Booking/>} exact />
          <Route path="/aboutus" element={<AboutUs/>} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
