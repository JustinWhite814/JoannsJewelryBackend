const mongoose = require('../db/connection')
const { Schema } = mongoose
mongoose.Promise = global.Promise;

const UserSchema = new Schema(
  {
    firstName: {
      type:String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    username: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      trim: true
  }
  }
)

const User = mongoose.model('User', UserSchema);

module.exports = User;