const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
  try {
      await mongoose.connect(
          process.env.MONGO_URL,
          {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              useFindAndModify: false,
              useCreateIndex: true,
          }
      )
      console.log('database connected!')
  } catch (error) {
      console.error(error.message)
  }
}

module.exports = { connect }