"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Role = _interopRequireDefault(require("./Role"));

var User = _database.sequelize.define('users', {
  id: {
    type: _sequelize["default"].INTEGER,
    // llave primaria, con la opcion de ser autoincrementable
    primaryKey: true,
    autoIncrement: true
  },
  avatar: {
    type: _sequelize["default"].STRING
  },
  name: {
    type: _sequelize["default"].STRING
  },
  lastname: {
    type: _sequelize["default"].STRING
  },
  numberphone: {
    type: _sequelize["default"].STRING
  },
  role: {
    type: _sequelize["default"].INTEGER
  },
  status: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

_Role["default"].hasOne(User, {
  foreignKey: 'role',
  sourceKey: 'id'
});

User.belongsTo(_Role["default"], {
  as: 'charge',
  foreignKey: 'id',
  sourceKey: 'role'
});
var _default = User;
exports["default"] = _default;