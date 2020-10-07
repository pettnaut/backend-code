"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _role = require("../controllers/role.controller");

var router = (0, _express.Router)();
router.get('/', _role.getRoles);
var _default = router;
exports["default"] = _default;