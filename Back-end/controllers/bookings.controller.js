const {Booking} = require('../orm-database');
const { Sequelize } = require("sequelize");

const readBooking = async function (req, res) {
   try {
     const bookings = await Booking.findAll();
     res.status(200).send(bookings);
   } catch (error) {
     res.status(500).send(error);
   }
 };

 const createBooking = async function (req, res) {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).send(error);
    }
 }
 const updateBooking = async function (req, res){
  const id = req.params.id ;
  const {check_in,    duration,    CamperId,    SiteId}=req.body;
  try {
    let booking = await Booking.update({check_in,    duration,    CamperId,    SiteId}, {where : {id: id}});
    res.status(200).json(booking);
  } catch (error) {
    res.send(error);
 }
 }
 const deleteBooking = async function (req, res){
  const id = req.params.id;
  try {
    const booking = await Booking.destroy({where :{id: id}});
    res.status(200).json(booking);
    } catch (error) {
    res.status(404).send(error);
 }
 }
 

module.exports = { readBooking, createBooking, updateBooking, deleteBooking};
