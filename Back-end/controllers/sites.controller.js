const sites = require('../orm-database/sites.model.js');
const { Sequelize } = require("sequelize");

const read = async function (req, res) {
   try {
     const sites = await Booking.findAll();
     res.status(200).send(sites);
   } catch (error) {
     res.status(500).send(error);
   }
 };

 const create = async function (req, res) {
    try {
        const site = await Booking.create(req.body);
        res.status(201).json(site);
    } catch (error) {
        res.status(500).send(error);
    }
 }
 const update = async function (req, res){
  const bookingId = req.params.id ;
  const {name,    image, location,  ivailability,  main_activity}=req.body;
  try {
    let site = await Booking.update({check_in,    duration,    campers_id,    sites_id}, {where : {id: bookingId}});
    res.status(200).json(site);
  } catch (error) {
    res.send(error);
 }
 }
 const deleete = async function (req, res){
  const siteId = req.params.id;
  try {
    const site = await Booking.destroy({where :{id: bookingId}});
    res.status(200).json(site);
    } catch (error) {
    res.status(404).send(error);
 }
 }
 

module.exports = { read, create, update, deleete};
