const BaseUrl = '/api/v1/';
module.exports = function (app) {
  console.log("app", app.use);
  app.use(BaseUrl + "todo", require("../controllers/todo"));
}
