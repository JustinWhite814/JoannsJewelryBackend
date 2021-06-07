// const express = require("express");
// const router = express.Router();
// // const User = require("../models/UserModel");

// // Index: GET all the Users
// router.get("/", (req, res, next) => {
//   User.find({})
//     .then((result) => res.json(result))
//     .catch(next);
// });

// // Show: Get a User by username
// router.get("/:username", (req, res, next) => {
//   User.findOne({ username: req.params.username })
//     .then((result) => res.json(result))
//     .catch(next);
// });

// Create: Create a new User
// router.post("/", (req, res, next) => {
//   User.create(req.body)
//     .then((result) => res.json(result))
//     .catch(next);
// });

// // Update: Update a User's information
// router.put("/:id", (req, res, next) => {
//   User.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//   })
//     .then((result) => res.json(result))
//     .catch(next);
// });


// module.exports = router