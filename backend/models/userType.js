const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userTypeSchema = new Schema({
  name: {
    type: String, // Admin or User
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

module.exports = model("UserType", userTypeSchema);
