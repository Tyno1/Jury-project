const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
   lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: Schema.Types.ObjectId,
    ref: "UserType",
    required: true
  }
});

module.exports = model("User", userSchema);
