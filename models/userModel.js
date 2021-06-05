const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type:String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {type: String,
    required: true
    }
  },
  {timestamp: true}
)

const User = mongoose.model('User', UserSchema);

module.exports = User;