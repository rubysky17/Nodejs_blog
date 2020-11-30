const Course = require("../models/Course");

class SiteController {
  //[GET] news
  index(req, res) {
    Course.find({}, function (err, course) {
      if (!err) res.json(course);
    });
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
