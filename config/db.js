const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
   try {
      await mongoose.connect("mongodb+srv://shrinkhalashringar000:bKzIUeZxnOTc2UXU@cluster0.7gmrqyw.mongodb.net/Bloodbank");
      console.log(`Connected to Mongodb Database ${mongoose.connection.host}`.bgCyan.white);
   } catch (error) {
      console.log(`Mongodb Database Error ${error}`.bgRed.white);
   }
};
module.exports = connectDB;