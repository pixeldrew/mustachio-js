/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Mustachio.js' })
};

exports.notfound = function(req, res) {
  res.render('404', {title: 'Not Found'});
};
