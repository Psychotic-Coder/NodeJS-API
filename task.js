const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);
