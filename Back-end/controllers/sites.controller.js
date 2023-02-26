const {Site} = require('../orm-database');
const { Sequelize } = require("sequelize");
//const bodyParser = require('body-parser')

const readSite = async function (req, res) {
   try {
     const sites = await Site.findAll();
     res.status(200).send(sites);
   } catch (error) {
     res.status(500).send(error);
   }
 };

 const createSite = async function (req, res) {
    try {
        const site = await Site.create(req.body);
        //await site.save();
        res.status(201).json(site);
    } catch (error) {
        res.status(500).send(error);
    }
 }
 const updateSite = async function (req, res){
  const id = req.params.id ;
  const {name,    image, location,  availability,  main_activity}=req.body;
  try {
    let site = await Site.update({name,    image, location,  availabity,  main_activity}, {where : {id: id}});
    res.status(200).json(site);
  } catch (error) {
    res.send(error);
 }
 }
 const deleteSite = async function (req, res){
  const id = req.params.id;
  try {
    const site = await Site.destroy({where :{id: id}});
    res.status(200).json(site);
    } catch (error) {
    res.status(404).send(error);
 }
 }
 

module.exports = { readSite, createSite, updateSite, deleteSite};
