"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = createUser;
exports.getUsers = getUsers;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Credential = _interopRequireDefault(require("../models/Credential"));

var _database = require("../database/database");

var _Role = _interopRequireDefault(require("../models/Role"));

function createUser(_x, _x2) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, avatar, lastname, role, numberphone, email, password, t, newUser, newCredential;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, avatar = _req$body.avatar, lastname = _req$body.lastname, role = _req$body.role, numberphone = _req$body.numberphone, email = _req$body.email, password = _req$body.password;
            _context.next = 3;
            return _database.sequelize.transaction();

          case 3:
            t = _context.sent;
            _context.prev = 4;
            _context.next = 7;
            return _User["default"].create({
              name: name,
              avatar: avatar,
              lastname: lastname,
              numberphone: numberphone,
              role: role
            }, {
              transaction: t
            });

          case 7:
            newUser = _context.sent;
            _context.next = 10;
            return _Credential["default"].create({
              email: email,
              password: password,
              userid: newUser.id
            }, {
              transaction: t
            });

          case 10:
            newCredential = _context.sent;
            _context.next = 13;
            return t.commit();

          case 13:
            return _context.abrupt("return", res.json({
              message: "User created successfully",
              data: newUser
            }));

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
            _context.next = 20;
            return t.rollback();

          case 20:
            return _context.abrupt("return", res.status(500).json({
              message: "the email ".concat(_context.t0.fields.email, " has already been registered"),
              data: {}
            }));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 16]]);
  }));
  return _createUser.apply(this, arguments);
}

function getUsers(_x3, _x4) {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User["default"].findAll({
              include: {
                model: _Role["default"],
                as: 'charge'
              },
              where: {
                status: true
              },
              attributes: ['avatar', 'name', 'lastname', 'numberphone']
            });

          case 3:
            users = _context2.sent;
            return _context2.abrupt("return", res.json({
              data: users
            }));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).json({
              message: "Something goes wrong",
              data: {}
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getUsers.apply(this, arguments);
}