"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var Credential = _database.sequelize.define('credentials', {
  id: {
    type: _sequelize["default"].INTEGER,
    // llave primaria, con la opcion de ser autoincrementable
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: _sequelize["default"].STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: _sequelize["default"].STRING
  },
  userid: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = Credential;
exports["default"] = _default;