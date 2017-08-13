var express = require('express');
var router = express.Router();
var myrecsController = require('../controllers/myrecs')

/* GET users listing. */
router.get('/', myrecsController.index);

router.get('/new', myrecsController.new);

router.get('/edit', myrecsController.edit);

router.post('/new', myrecsController.search);

module.exports = router;
