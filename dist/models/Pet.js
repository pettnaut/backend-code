"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var Pet = _database.sequelize.define('pets', {
  id: {
    type: _sequelize["default"].INTEGER,
    // llave primaria, con la opcion de ser autoincrementable
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize["default"].STRING
  },
  age: {
    type: _sequelize["default"].INTEGER
  },
  height: {
    type: _sequelize["default"].INTEGER
  },
  weight: {
    type: _sequelize["default"].INTEGER
  },
  race: {
    type: _sequelize["default"].STRING
  },
  typeanimal: {
    type: _sequelize["default"].ENUM,
    // Atributo declarado como ENUM
    values: ['DOG', 'CAT'] // Editing this array

  },
  petstatus: {
    type: _sequelize["default"].ENUM,
    values: ['PERDIDO', 'EN ADOPCIÓN'] // Editing this array

  }
}, {
  timestamps: false
});

var _default = Pet;
exports["default"] = _default;