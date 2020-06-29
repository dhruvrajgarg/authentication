const User = require("../models/user");

module.exports.home = async function (req, res) {
  try {
    return res.render("home", {
      title: "Codeial | Home",
    });
  } catch (err) {
    console.log("Error", err);
    return;
  }
};

// module.exports.actionName = function(req, res){}

// using then


// posts.then()
