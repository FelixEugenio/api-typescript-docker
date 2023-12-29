"use strict";

require("reflect-metadata");
var _express = _interopRequireDefault(require("express"));
var _routes = require("./routes");
require("../../container");
var _celebrate = require("celebrate");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_routes.router);
app.use((err, req, res, next) => {
  if (err instanceof _celebrate.CelebrateError) {
    return res.status(400).json({
      message: err.details.get('body')
    });
  }
  return res.status(500).json({
    status: 'Error',
    message: `Internal Server Error:${err.message}`
  });
});
app.listen(5000, () => {
  console.log("server is running");
});