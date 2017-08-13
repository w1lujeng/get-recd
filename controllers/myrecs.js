function index(req, res) {
  res.render('myrecs/index');
};

function newRec(req, res) {
  res.render('myrecs/new');
};

function edit(req, res) {
  res.render('myrecs/edit');
};


module.exports = {
  index,
  new: newRec,
  edit
}