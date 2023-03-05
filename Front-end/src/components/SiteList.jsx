import React from "react";
// Import the Cloudinary classes. 
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';




  
const SiteList = ({site, deleteSite}) => {
    const myImage = new CloudinaryImage('sample', {cloudName: 'du8dllbos'}).resize(fill().width(100).height(150));

    return (
        <div>
            <h3>Camping: {site.name} | Location: {site.location} {'    '}<button>Booking</button>{'    '} <button onClick={() => {deleteSite(site.id)}}>Delete Site</button></h3>
            {/* <AdvancedImage cldImg={myImage} /> */}
        </div>
        
    )
}

export default SiteList;