var express = require('express');
var router = express.Router();
var myrecsController = require('../controllers/myrecs');

router.get('/', myrecsController.index);
router.get('/new', myrecsController.new);
// router.get('/edit', myrecsController.edit);
// router.get('/add/:listId', myrecsController.page);
router.post('/add', myrecsController.search);
router.post('/', myrecsController.add);
router.get('/about', myrecsController.about);
router.delete('/:id', myrecsController.delete);
module.exports = router;
