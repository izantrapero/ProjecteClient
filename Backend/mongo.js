const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mariokart");

    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error.message);
  }
};

module.exports = connectDB;