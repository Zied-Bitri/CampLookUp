import React, { useState } from "react";

const AddSite = ({ addSite }) => {
    const [newSite, setNewSite] = useState({});
    // const [imageSelected, setImageSelected] = useState("")

    return (
        <div>
            <h4>Enter Camping Site information :</h4>
            <div>
                <input type="texte" name="name" placeholder="Name" onChange={e => setNewSite({ ...newSite, name: e.target.value })} />
            </div>
            <div>
                <input type="texte" name="location" placeholder="Location" onChange={e => setNewSite({...newSite, location: e.target.value})} />
            </div>
            {/* <div>
                <input type="file" name="image" placeholder="Image" onChange={e => setImageSelected(e.target.files[0])} />
                <button onClick={e => uploadImage(imageSelected)}>Load Image</button>
            </div> */}
            <button onClick={() => {addSite(newSite)}}>Submit</button>

        </div>
    )
}

export default AddSite;