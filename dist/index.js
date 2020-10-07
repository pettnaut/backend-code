"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

function main() {
  _app["default"].listen(process.env.PORT || 4000);

  console.log("Server on port 4000");
}

main();