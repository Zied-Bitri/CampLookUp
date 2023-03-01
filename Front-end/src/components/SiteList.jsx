import React from "react";

const SiteList = ({site}) => {
    return (
        <div>
            <h3>Camping: {site.name} | Location: {site.location} <button>Book</button></h3>
        </div>
    )
}

export default SiteList;