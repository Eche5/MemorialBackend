const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const fs = require("fs");

const Photos = require("../Models/photosModel");
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"));
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
const photos = JSON.parse(fs.readFileSync(`${__dirname}/photos.json`, "utf-8"));
// const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'));
const importData = async () => {
  try {
    // await Tour.create(tours);
    await Photos.create(photos, { validateBeforeSave: false });
    console.log("Data successfully Created!!!");

    // await Review.create(reviews);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const deleteData = async () => {
  try {
    // await Tour.deleteMany();
    await Biochemistry.deleteMany();
    // await Review.deleteMany();

    console.log("Data successfully Deleted!!!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
console.log(process.argv);
