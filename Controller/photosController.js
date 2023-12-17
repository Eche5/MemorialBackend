const Photos = require("../Models/photosModel");

exports.getAllPhotos = async (req, res) => {
  const images = await Photos.find();
  res.status(200).json({ data: images });
};
