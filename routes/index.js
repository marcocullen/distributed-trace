
/*
* GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.table = function(req, res) {
	res.sendfile('test.html');
}
