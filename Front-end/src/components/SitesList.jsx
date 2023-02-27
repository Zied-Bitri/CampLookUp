import React from "react";


const SitesList = (props) => {
    return (
        <div>
            {props.sites.map(site => <SiteDetails key={site.id} site={site} />)}
        </div>
    )
}

export default SitesList;
