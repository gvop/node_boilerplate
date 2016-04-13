var mongoose        = require("mongoose");
var databaseUrl     = "mongodb://gvop:Rein201125@ds013589.mlab.com:13589/gvopmongodb01"
// var databaseUrl     = "mongodb://localhost:27017/mlabTest"

mongoose.connect(databaseUrl);