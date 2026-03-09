// mongo.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // URL de conexión a tu base de datos local o Atlas
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/mariokart', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB conectado: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error conectando a MongoDB: ${error.message}`);
    process.exit(1); // Para cerrar la app si falla la conexión
  }
};

module.exports = connectDB;