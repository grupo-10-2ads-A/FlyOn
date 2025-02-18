var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", usuarioController.cadastrar);
router.post("/autenticar", usuarioController.autenticar);

module.exports = router;
