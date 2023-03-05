import React, {useEffect, useState } from 'react'
import HeaderLogInSignUp from "./components/HeaderLogInSignUp.jsx";
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx";
import SitesList from "./components/SitesList.jsx"
import AddSite from "./components/AddSite.jsx";
import Booking from "./components/Booking.jsx"
import AboutUs from "./components/AboutUs.jsx";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Profile from "./components/Profile.jsx";
import BoardUser from "./components/BoardUser.jsx";
import BoardAdmin from "./components/BoardAdmin.jsx";

function App() {
  const [sites, setSites] = useState([]);
  //const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentSite, setCurrentSite] =useState([]);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      //setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  
    axios
      .get("http://localhost:5000/sites")
      .then((res) => setSites(res.data))
      .catch((err) => console.log(err))
  }, []);

  const udCurrentSite = (site)=>
  {
    setCurrentSite(site);
  };

  const logOut = () => {
    AuthService.logout();
  };

  const addSite = (site) => {
    console.log(site);
    axios
      .post("http://localhost:5000/sites", site)
      .then(res => {
        console.log("New Site added successfully")
        setSites([...sites, res.data])})
      .catch(err => console.log(err));
  };

      

  const addBooking = (camper, currentSite)=>{
    axios
      .post("http://localhost:5000/campers",camper)
      .then(res => 
        //axios
        //.post("http://localhost:5000/booking")
        console.log("Camper added seccessfully"+res))
      .catch((err)=>
         console.log(err));

  };

  const uploadImage = (image) => {
   
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_presets", "uosh94ui");

    axios
    .post("https://api.cloudinary.com/v1_1/du8dllbos/image/upload", formData)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

      

  const deleteSite = (id) => {
    axios
      .delete(`http://localhost:5000/sites/${id}`)
      .then(res => {
        console.log(`${res.data.name} deleted successfully`)
        setSites(sites.filter((site) => {
          return site.id !== id;
        }))
      })
      .catch(err => console.log(err))
  }


  


  return (
    <React.Fragment>
      <header>
      {(!currentUser) && <HeaderLogInSignUp/>}
       {(currentUser) && <Header/>}
      </header>
      <main>
        <Routes>

          <Route path="/" element={<Home setCurrentSite={setCurrentSite} sites={sites}/>} exact/>
          <Route path="/sites" element={<SitesList deleteSite={deleteSite} currentUser={currentUser} setCurrentSite={setCurrentSite} sites={sites} />} exact />
          <Route path="/login" element={<Login/>} exact />
          <Route path="/register" element={<Register/>} exact />
          <Route path="/profile" element={<Profile/>} exact/>
          <Route path="/user" element={<BoardUser/>} exact/>
          <Route path="/admin" element={<BoardAdmin/>} exact/>
          <Route path="/addsite" element={<AddSite currentUser={currentUser} addSite={addSite} uploadImage={uploadImage}/>} exact />
          <Route path="/booking" element={<Booking addBooking={addBooking} currentSite={currentSite} currentUser={currentUser}/>} exact/>
          <Route path="/logout" element={<Home setCurrentSite={setCurrentSite} setCurrentUser={setCurrentUser} sites={sites}/>} exact/>

          <Route path="/aboutus" element={<AboutUs />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
