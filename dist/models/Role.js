"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var Role = _database.sequelize.define('roles', {
  id: {
    type: _sequelize["default"].INTEGER,
    // llave primaria, con la opcion de ser autoincrementable
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize["default"].STRING
  },
  description: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false
});

var _default = Role;
exports["default"] = _default;