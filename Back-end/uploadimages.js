const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "dpziskadi",
  api_key: "774882349891624",
  api_secret: "4iFmX1fqkYJbMBGtYWccFJmVu9s"
});


// Upload

const res = cloudinary.uploader.upload('https://www.facebook.com/Nord.Sud.Booking/photos/a.948589675190427/5364034113645939/?type=3', {public_id: "table_jugurtha"})

res.then((data) => {
  console.log(data);
  console.log(data.secure_url);
}).catch((err) => {
  console.log(err);
});


// Generate 
const url = cloudinary.url("table_jugurtha", {
  width: 50,
  height: 100,
  Crop: 'fill'
});



// The output url
console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
