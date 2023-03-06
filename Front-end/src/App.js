import React, {useEffect, useState } from 'react'
import HeaderLogInSignUp from "./components/HeaderLogInSignUp.jsx";
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx";
import SitesList from "./components/SitesList.jsx"
import AddSite from "./components/AddSite.jsx";
import Booking from "./components/Booking.jsx"
import AboutUs from "./components/AboutUs.jsx";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import { useNavigate } from 'react-router-dom';
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Profile from "./components/Profile.jsx";
import BoardUser from "./components/BoardUser.jsx";
import BoardAdmin from "./components/BoardAdmin.jsx";

function App() {

  const [sites, setSites] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentSite, setCurrentSite] =useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    axios
      .get("http://localhost:5000/sites")
      .then((res) => setSites(res.data))
      .catch((err) => console.log(err))
  }, []);

  const addSite = (site) => {
    console.log(site);
    axios
      .post("http://localhost:5000/sites", site)
      .then(res => {
        console.log("New Site added successfully")
        setSites([...sites, res.data])})
      .catch(err => console.log(err));
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

  const booking = (site) => {
    setCurrentSite(site);
    console.log(site);
    navigate("/Booking");
    window.location.reload();
  }

  const addBooking = (camper, currentSite) => {
    let camperData = {}
    axios
      .post("http://localhost:5000/campers", camper)
      .then(res => {
        console.log("Camper added seccessfully" + res.data)
        camperData = res.data
        axios
          .post("http://localhost:5000/booking", camperData.id)
          .then(res => console.log(res))
          .catch(err => console.log(err))
          })
      .catch((err) =>
        console.log(err));
};

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <React.Fragment>
      <header>
      {(!currentUser) && <HeaderLogInSignUp/>}
       {(currentUser) && <Header/>}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home setCurrentSite={setCurrentSite} sites={sites}/>} exact/>
          <Route path="/sites" element={<SitesList deleteSite={deleteSite} currentUser={currentUser} booking={booking} sites={sites} />} exact />
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
