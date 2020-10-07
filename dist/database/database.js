"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var sequelize = new _sequelize["default"](process.env.DATABASE_URL || 'postgres://postgres:postges@127.0.0.1:5432/postges'); // Example for postgres

exports.sequelize = sequelize;