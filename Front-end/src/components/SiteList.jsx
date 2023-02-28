import React from "react";

const SiteList = ({site}) => {
    return (
        <div>
            <h3>Camping: {site.name} | Location: {site.location} </h3>  
            <button>Select</button>
        </div>
    )
}

export default SiteList;