const users = require("./userSeed.json");
const jewels = require("./jewelrySeed.json");
const User = require("../models/UserModel.js");
const Jewel = require("../models/jewelryModel.js");

User.deleteMany({})
  .then(() => {
    return User.insertMany(users);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });

Jewel.deleteMany({})
  .then(() => {
    return Jewel.insertMany(jewels);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
