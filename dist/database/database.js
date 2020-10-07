"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var database = process.env.DATABASE || 'postgres'; // nombre de tu base de datos

var username = process.env.USER || 'postgres'; // nombre de tu usuario

var password = process.env.PASSWORD || 'postgres'; // contraseña de el usuario (en este caso el usuario es 'postgres')

var sequelize = new _sequelize["default"](database, username, password, {
  host: 'localhost',
  dialect: 'postgres',
  // base de datos que usaremos
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;