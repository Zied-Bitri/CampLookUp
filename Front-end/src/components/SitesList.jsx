import React from "react";
import SiteList from "./SiteList";

const SitesList = (props) => {
    console.log(props)
    return (
        <ul>
            {props.sites.map(site => (
            <li key={site.id}><SiteList  site={site} deleteSite={props.deleteSite}/></li>))
            }
        </ul>
    )
}

export default SitesList;
