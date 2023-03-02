import React from "react";

const SiteList = ({site, deleteSite}) => {
    return (
        <div>
            <h3>Camping: {site.name} | Location: {site.location} {'    '}<button>Booking</button>{'    '} <button onClick={() => {deleteSite(site.id)}}>Delete Site</button></h3>
        </div>
    )
}

export default SiteList;