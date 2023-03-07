import React, { useState } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";

const AddSite = ({ addSite }) => {
    const [newSite, setNewSite] = useState({});
    const handleCloudinaryUrl = (url) => {
        console.log(url);
        setNewSite({...newSite, image: url});
        }

    return (
        <div className="AddSite">
            <h4>Enter Camping Site information :</h4>
            <div className="form">
                <input type="texte" name="name" placeholder="Name" onChange={e => setNewSite({ ...newSite, name: e.target.value })} />
                <input type="texte" name="location" placeholder="Location" onChange={e => setNewSite({...newSite, location: e.target.value})} />
                <input type="texte" name="main_activity" placeholder="main_activity" onChange={e => setNewSite({...newSite, main_activity: e.target.value})} />
            </div>
            <CloudinaryUploadWidget handleCloudinaryUrl={handleCloudinaryUrl} />
            <button onClick={() => {addSite(newSite)}}>Submit</button>

        </div>
    )
}

export default AddSite;