const express = require("express");
const router = express.Router();
const Jewel = require("../models/jewelryModel");

// Index: GET all the Users
// This route will be open to all users
router.get("/", (req, res, next) => {
  Jewel.find({})
    .then((result) => res.json(result))
    .catch(next);
});

router.get("/:category", (req, res, next)=> {
 Jewel.find({ category : req.params.category})
      .then((result) => res.json(result))
      .catch(next);  
})

router.get("/:id", (req, res, next) => {
  Jewel.findById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});


// these will not
// {
// router.post("/", (req, res, next) => {
//   Jewel.create(req.body)
//   .then(createResponse => Jewel.find({}))
//   .then(jewels => res.json(jewels))
//   .catch(next);
// });

// router.put("/:id", (req, res, next) => {
//   Jewel.findOneAndUpdate({ _id: req.params.id }, req.body)
//   .then(editResponse => Jewel.find({}))
//   .then(jewels => res.json(jewels))
//   .catch(next);
// });

// router.delete("/:id", (req, res, next) => {
//   Jewel.findOneAndDelete({ _id: req.params.id })
//   .then(deleteResponse => Post.find({}))
//   .then(posts => res.json(posts))
//   .catch(next);
// });
// }
module.exports = router