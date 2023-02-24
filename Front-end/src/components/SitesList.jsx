import React from "react";
import SiteName from "./SiteName.jsx";

const SitesList = (props) => {
    return (
        <div>
            {props.sites.map(site => <SiteName key={site.id} site={site} />)}
        </div>
    )
}

export default SitesList;