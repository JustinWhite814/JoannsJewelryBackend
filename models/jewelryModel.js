const mongoose = require('../db/connection')

const JewelrySchema = new mongoose.Schema({
  title = {type:String, required: true},
  price = {type:Number},
  category = {type: String},
  image = {type: String}
})


const Jewel = mongoose.model("Jewel", JewelrySchema)

module.exports = Jewel