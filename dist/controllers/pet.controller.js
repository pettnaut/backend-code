"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPet = createPet;
exports.getPets = getPets;
exports.getPetById = getPetById;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Pet = _interopRequireDefault(require("../models/Pet"));

// Metodo para crear una nueva mascota
function createPet(_x, _x2) {
  return _createPet.apply(this, arguments);
} // Metodo para obtener todas las mascotas almacenadas


function _createPet() {
  _createPet = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, age, height, weight, race, typeanimal, petstatus, newPet;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, age = _req$body.age, height = _req$body.height, weight = _req$body.weight, race = _req$body.race, typeanimal = _req$body.typeanimal, petstatus = _req$body.petstatus;
            _context.prev = 1;
            _context.next = 4;
            return _Pet["default"].create({
              // Gracias al ORM insertamos un dato solo con una funcion, sin necesidad de escribir una query
              name: name,
              age: age,
              height: height,
              weight: weight,
              race: race,
              typeanimal: typeanimal,
              petstatus: petstatus
            });

          case 4:
            newPet = _context.sent;

            if (!newPet) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "Pet created successfully",
              data: newPet
            }));

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              message: "Something goes wrong",
              data: {}
            }));

          case 13:
            ;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _createPet.apply(this, arguments);
}

function getPets(_x3, _x4) {
  return _getPets.apply(this, arguments);
} // Metodo para obtener una mascota por el ID


function _getPets() {
  _getPets = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pets;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Pet["default"].findAll();

          case 3:
            pets = _context2.sent;
            return _context2.abrupt("return", res.json({
              data: pets
            }));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              message: "Something goes wrong",
              data: {}
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getPets.apply(this, arguments);
}

function getPetById(_x5, _x6) {
  return _getPetById.apply(this, arguments);
} // Hablar sobre si es necesario un metodo borrar


function _getPetById() {
  _getPetById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pet;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Pet["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            pet = _context3.sent;

            if (!pet) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              data: pet
            }));

          case 7:
            return _context3.abrupt("return", res.status(400).json({
              message: "This pet is not exist",
              data: {}
            }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(500).json({
              message: "Something goes wrong",
              data: {}
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return _getPetById.apply(this, arguments);
}