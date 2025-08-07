const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const URL = mongoose.model("url", urlSchema);
module.exports = URL;
