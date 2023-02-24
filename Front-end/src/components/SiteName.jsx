import React from "react";

const SiteName = (props) => {
    return (
        <div>
            <h3>Camping: {props.site.name} | Location: {props.site.location} | Main Activity: {props.site.main_activity}</h3>  
            <button>Select</button>
        </div>
    )
}

export default SiteName;