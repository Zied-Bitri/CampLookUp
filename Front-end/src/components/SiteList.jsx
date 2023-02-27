import React from "react";

const SiteList = (props) => {
    return (
        <div>
            <h3>Camping: {props.site.name} | Location: {props.site.location} | Main Activity: {props.site.main_activity}</h3>  
            <button>Select</button>
        </div>
    )
}

export default SiteList;