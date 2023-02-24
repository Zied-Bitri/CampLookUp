const {Campers} = require('../orm-database');
const { Sequelize } = require("sequelize");

const readCamper = async function (req, res) {
   try {
     const campers = await Campers.findAll();
     res.status(200).send(campers);
   } catch (error) {
     res.status(500).send(error);
   }
 };

 const createCamper = async function (req, res) {
    try {
        const campers = await Campers.create(req.body);
        res.status(201).json(campers);
    } catch (error) {
        res.status(500).send(error);
    }
 }
 const updateCamper = async function (req, res){
  const camperId = req.params.id ;
  const {firstname,    lastname,    email,    telnumber}=req.body;
  try {
    let camper = await Booking.update({firstname,    lastname,    email,    telnumber}, {where : {id: camperId}});
    res.status(200).json(camper);
  } catch (error) {
    res.send(error);
 }
 }
 const deleteCamper = async function (req, res){
  const camperId = req.params.id;
  try {
    const camper = await Campers.destroy({where :{id: camperId}});
    res.status(200).json(camper);
    } catch (error) {
    res.status(404).send(error);
 }
 }
 

module.exports = { readCamper, createCamper, updateCamper, deleteCamper};
