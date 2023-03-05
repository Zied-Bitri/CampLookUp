import React from "react";
import { useNavigate } from 'react-router-dom';


const SiteList = ({site, deleteSite, currentUser, setCurrentSite}) => {
    
    let navigate=useNavigate();
    const booking = ()=>{
        setCurrentSite(site);
        console.log(site);
        navigate("/Booking");
        window.location.reload(); 
    }
    return (
        <React.StrictMode>
        <div className='card'>
            <h4>Camping Site: </h4>
            <h4 onClick={()=>booking()}>{site.name} </h4>
            <h4> Location: {site.location} </h4>
            <img src={site.image} alt={site.name} onClick={()=>booking()}/>
            <div><p>      </p> </div>
            {(currentUser) && <button sx={{mt: "auto"}}>Update</button>}
            <div><p>      </p> </div>
            {(currentUser) &&  <button sx={{mt: "auto"}} onClick={() => {deleteSite(site.id)}}>Delete</button>}

        </div>
        </React.StrictMode>
    )
}

export default SiteList;