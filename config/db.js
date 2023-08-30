const mongoose = require("mongoose");

// add your MONGO_URI in .env file
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Mongo DB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error occured: ${error}`);
    process.exit();
  }
};

module.exports = connectDB;
