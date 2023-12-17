const express = require("express");
const photosController = require("../Controller/photosController");
const router = express.Router();

router.route("/photos").get(photosController.getAllPhotos);
module.exports = router;
