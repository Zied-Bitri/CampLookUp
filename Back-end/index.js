const express = require("express");
const jwt = require ("jsonwebtoken");
//const axios = require ("axios");
const bookingRoutes = require('./routes/booking.js');
const campersRoutes = require('./routes/campers.js');
const sitesRoutes = require('./routes/sites.js');
 
const db = require('./orm-database');
const { result } = require("lodash");

const app = express();
let secretKey = "hahaha"
const PORT = process.env.PORT || 3000
// creating a middleware
function CreateToken(req,res,next){
  const user = { username:req.body.username}
  jwt.sign(user,secretKey,(err, result)=> {
 if (err){
  res.json({ error:err})
 } else {
  res.json({token:result})
 }
  });
  next()


}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/booking", bookingRoutes);
app.use("/api/campers", campersRoutes);
app.use("/api/sites", sitesRoutes);
app.post('./login',(req,res=>{

}))
app.post('/sites', async function (req, res) {
  //add site
  const {}= req.body.
  console.log(username)
  
  try {
    const { data } = await getReposByUsername(username)
    // reshape the received data to just keep needed information
    const repos = data.map((repo) => {
      return {
        name: repo.name,
        id: repo.id,
        owner: repo.owner.login,
        url: repo.html_url,
        created_at: repo.created_at,
      }
    })
    // save the repo information in the database
    const savedRepos = await save(repos)
    // send the results from the database to the client
    res.status(201).json(savedRepos)
  } catch (error) {
    // if we get a duplication error from the database or an axios error from GITHUB API
    if (error.code === 11000 || error.isAxiosError) {
      // fetch the repos by username from the database
      const repos = await findReposByUsername(username)
      // send the results to the client
      return res.json(repos)
    }
    // for any other kind of internal server error
    res.status(500).send(error)
  }
})

app.get('/sites', async function (req, res) {
  // return all sites
  try {
    const repos = await findRepos()
    res.json(repos)
  } catch (err) {
    res.status(500).send(err)
  }
})


app.listen(PORT, CreateToken, function () {
  console.log(`listening on port ${PORT}!`);
});