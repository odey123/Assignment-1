const mongoose = require ('mongoose')
require('dotenv').config();

const mongo_url = process.env.MONGO_URL
 
const connectDb = async () => {
  try {
    await mongoose.connect(mongo_url);
    console.log('Database connection successful');
  } catch (error) {
    console.log('Database connection error:', error)
    process.exit(1)
  }
}


module.exports = connectDb