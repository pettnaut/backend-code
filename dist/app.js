"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _pets = _interopRequireDefault(require("./routes/pets.js"));

var _users = _interopRequireDefault(require("./routes/users.js"));

var _roles = _interopRequireDefault(require("./routes/roles.js"));

// Importing routes
// Initialization
var app = (0, _express["default"])(); // Middelwares

app.use((0, _morgan["default"])('dev')); // middleware para poder ver en consola las peticiones

app.use((0, _express.json)());
app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // para poder obtener los valores del body

app.use(_bodyParser["default"].json()); // para castearlos como json
// Routes

app.use('/api/pets', _pets["default"]); // La ruta pets

app.use('/api/users', _users["default"]); // La ruta users

app.use('/api/roles', _roles["default"]); // La ruta roles

var _default = app;
exports["default"] = _default;