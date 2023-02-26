const {Sites} = require('../orm-database');

const readSite = async function (req, res) {
  try {
    const sites = await Sites.findAll();
    res.status(200).send(sites);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createSite = async function (req, res) {
  try {
    const site = await Sites.create(req.body);
    //await site.save();
    res.status(201).json(site);
  } catch (error) {
    res.status(500).send(error);
  }
}

const updateSite = async function (req, res) {
  const id = req.params.id;
  const { name, image, location, availabity, main_activity } = req.body;
  try {
    let site = await Sites.update({ name, image, location, availibity, main_activity }, { where: { id: id } });
    res.status(200).json(site);
  } catch (error) {
    res.send(error);
  }
}

const deleteSite = async function (req, res) {
  const id = req.params.id;
  try {
    const site = await Sites.destroy({ where: { id: id } });
    res.status(200).json(site);
  } catch (error) {
    res.status(404).send(error);
  }
}
 

module.exports = { readSite, createSite, updateSite, deleteSite};
