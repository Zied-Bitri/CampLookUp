import React from "react";
import SiteList from "./SiteList";
import "./SitesList.css";

const SitesList = ({currentUser, deleteSite, booking, sites}) => {
    console.log(sites)
    return (
        <ul>

            {sites.map(site => (
            <li key={site.id}><SiteList  deleteSite={deleteSite} currentUser={currentUser} booking={booking} site={site} /></li>))

            }
        </ul>
    )
}

export default SitesList;
