var List = require('../../models/list');

function getAllLists(req, res) {
 	List.find({}, (err, lists) => {
 		res.status(200).json(lists);
 	});
 }

function getOneList(req, res) {
	List.findById(req.params.id, (err, list) => {
	res.status(200).json(list);
 	});
 }

 module.exports = {
	 getAllLists,
	 getOneList
 }