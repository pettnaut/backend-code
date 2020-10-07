"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pet = require("../controllers/pet.controller");

var router = (0, _express.Router)();
// /api/pets/
router.post('/', _pet.createPet);
router.get('/', _pet.getPets); // /api/pets/:petID

router.get('/:id', _pet.getPetById);
var _default = router;
exports["default"] = _default;