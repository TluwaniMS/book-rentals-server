const { dataBaseURL } = require("./config-keys/config-keys");
const mongoose = require("mongoose");

async function connectToDataBase() {
  mongoose
    .connect(dataBaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log(`connection to database succesfully created :)!!!`);
    })
    .catch((error) => {
      console.log(`something went wrong ${error.message}`);
    });
}

module.exports = { connectToDataBase };
