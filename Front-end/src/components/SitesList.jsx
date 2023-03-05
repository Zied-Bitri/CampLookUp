import React from "react";
import SiteList from "./SiteList";
import "./SitesList.css";

const SitesList = ({currentUser, deleteSite, setCurrentSite, sites}) => {
    console.log(sites)
    return (
        <ul>

            {sites.map(site => (
            <li key={site.id}><SiteList  deleteSite={deleteSite} currentUser={currentUser} setCurrentSite={setCurrentSite} site={site} /></li>))

            }
        </ul>
    )
}

export default SitesList;
