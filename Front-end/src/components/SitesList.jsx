import React from "react";
import SiteList from "./SiteList";
import "./SitesList.css";

const SitesList = ({currentUser, setCurrentSite, sites}) => {
    console.log(sites)
    return (
        <ul>
            {sites.map(site => (
            <li key={site.id}><SiteList  currentUser={currentUser} setCurrentSite={setCurrentSite} site={site} /></li>))
            }
        </ul>
    )
}

export default SitesList;
