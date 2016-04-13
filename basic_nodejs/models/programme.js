var mongoose      = require("mongoose");

var programmeSchema   = mongoose.Schema({
  name: String,
  client : Object
});

module.exports = mongoose.model("Programme", programmeSchema);