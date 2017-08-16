var express = require('express');
var router = express.Router();
var listsApiCtrl = require('../controllers/api/lists');

router.get('/', listsApiCtrl.getAllLists);
router.get('/:id', listsApiCtrl.getOneList);

module.exports = router;