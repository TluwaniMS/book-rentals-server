const { User } = require("../models/user");

async function createSampleUsers() {
  await User.insertMany();
}

module.exports = { createSampleUsers };
