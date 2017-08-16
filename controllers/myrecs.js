var request = require('request');
const rootURL = 'https://api.discogs.com/';
var passport = require('passport');
var List = require('../models/list');

function index(req, res) {
  res.render('myrecs/index', {user: req.user});
};

function newRec(req, res) {
  res.render('myrecs/new', {user: req.user});
};

function edit(req, res) {
  res.render('myrecs/edit', {user: req.user});
};

function search(req, res) {
  var listTitle = req.body.title;
  console.log('listTitle =', listTitle)
  var list = new List({title: listTitle})
  console.log('list =', list)
  list.save(function (err, newList) {
    console.log('err =', err)
    if (err) return res.json({err: err})
    console.log('newList =', newList)
    var options = {
      url: rootURL + 'database/search?q=' + req.body.search + '&type=master&format_exact=Vinyl&-format_exact=cd&-format_exact=cassette&-format=promo&type=release&artist=' + req.body.search + '&per_page=100',
      headers: {
        'User-Agent': 'w1lujeng',
        'Authorization': 'Discogs key=' + process.env.DISCOGS_KEY + ',' 
        + 'secret=' + process.env.SECRET
      }
    };
    request(options, function(err, response, body) {
      var records = JSON.parse(body);
      res.render('myrecs/add', {records, user: req.user, newList: newList} );
    });
  })
}

function add(req, res) {
  console.log(req.body);
  res.redirect('myrecs/new');
}

function about(req, res) {
  res.render('myrecs/about', {user: req.user});
}

module.exports = {
  index,
  new: newRec,
  edit,
  search,
  add,
  about
}