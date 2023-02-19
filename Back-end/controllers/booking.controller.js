const Booking = require('../orm-database/booking.model.js');
const { Sequelize } = require("sequelize");

const read = async function (req, res) {
   try {
     const bookings = await Booking.findAll();
     res.status(200).send(bookings);
   } catch (error) {
     res.status(500).send(error);
   }
 };

 const create = async function (req, res) {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).send(error);
    }
 }
 const update = async function (req, res){
  const bookingId = req.params.id ;
  const {check_in,    duration,    campers_id,    sites_id}=req.body;
  try {
    let booking = await Booking.update({check_in,    duration,    campers_id,    sites_id}, {where : {id: bookingId}});
    res.status(200).json(booking);
  } catch (error) {
    res.send(error);
 }
 }
 const deleete = async function (req, res){
  const bookingId = req.params.id;
  try {
    const booking = await Booking.destroy({where :{id: bookingId}});
    res.status(200).json(booking);
    } catch (error) {
    res.status(404).send(error);
 }
 }
 

module.exports = { read, create, update, deleete};
