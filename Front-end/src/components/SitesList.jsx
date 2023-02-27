import React from "react";
import SiteDetails from "./SiteList";

const SitesList = (props) => {
    return (
        <ul>
            {props.sites.map(site => {
            <li><SiteList key={site.id} site={site} /></li>})
            }
        </ul>
    )
}

export default SitesList;
