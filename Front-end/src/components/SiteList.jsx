import React from "react";



const SiteList = ({site, deleteSite, currentUser, booking}) => {
    
    

    
    return (
        <React.StrictMode>
        <div className='card'>
           
            <h4 onClick={()=>booking(site)}>{site.name} </h4>
            <h4> {site.location} </h4>
            <img src={site.image} alt={site.name} onClick={()=>booking(site)}/>
            <div><p>      </p> </div>
            {(currentUser) && <button sx={{mt: "auto"}}>Update</button>}
            <div><p>      </p> </div>
            {(currentUser) &&  <button sx={{mt: "auto"}} onClick={() => {deleteSite(site.id)}}>Delete</button>}

        </div>
        </React.StrictMode>
    )
}

export default SiteList;