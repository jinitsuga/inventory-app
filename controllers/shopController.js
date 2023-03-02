const async = require("async");

// Show home page

exports.index = (req, res, next) => {
  res.send("render a homepage with general shop info, numbers of items, etc");
};
