var request = require('request');
const rootURL = 'https://api.discogs.com/';


function index(req, res) {
  res.render('myrecs/index');
};

function newRec(req, res) {
  res.render('myrecs/new');
};

function edit(req, res) {
  res.render('myrecs/edit');
};

function search(req, res) {
  var options = {
    url: rootURL + 'database/search?q=' + req.body.search,
    headers: {
      'User-Agent': 'w1lujeng',
      'Authorization': 'Discogs key=' + 'YtAzejeNpYnjJWwHWLGV,'
      + 'secret=' + 'xxNpRMFrRkdTcCMHZMnzggHeRdnXnoLY'
    }
  };
  request(options, function(err, response, body) {
    var records = JSON.parse(body);

    // res.render('search-results', {records});\
    res.render('myrecs/new');
    console.log(records);
  });
}

module.exports = {
  index,
  new: newRec,
  edit,
  search
}