var mongoose      = require("mongoose");
var Programme     = require('../models/programme');
var Applicants    = mongoose.model("Applicants", mongoose.Schema());
var Users         = mongoose.model("Users", mongoose.Schema());


//JOBS
function applicantsIndex(req, res){
  Applicants.find(function(err, applicants){
    if (err) return res.render("error", { message: "Something went wrong. " + err });
    res.json(applicants);
  });
}


//USERS
function usersIndex(req, res){
  Users.find(function(err, users){
    if (err) return res.render("error", { message: "Something went wrong. " + err });
    res.json(users);
  });
}

//ADD PROGRAMME
function programmesAdd(req, res){
  var programme = new Programme(req.body);
  programme.save(function(err, programme) {
    if (err) return res.status(500).send(err);
    res.json(programme);
  })
};

module.exports = { 
  applicantsIndex : applicantsIndex,
  usersIndex : usersIndex,
  programmesAdd: programmesAdd
}