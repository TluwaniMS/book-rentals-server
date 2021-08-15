const { User } = require("../models/user");
const { users } = require("../sample-data/users");

async function createSampleUsers() {
  await User.insertMany(users);
}

module.exports = { createSampleUsers };
