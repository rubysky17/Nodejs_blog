class NewsController {
  //[GET] news
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.render("newsContent");
  }
}
module.exports = new NewsController();
