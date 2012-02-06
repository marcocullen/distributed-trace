
/*
* GET home page.
 */
var requests = 0;

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.table = function(req, res) {
	res.sendfile('public/test.html');
}

exports.tableData = function(req, res) {
	requests++;
	var data = { "aaData": [
			["UK Datahub","London Dev","log1.txt","UK Matched text" + requests],
			["UK Datahub","London Dev","log2.txt","Some more matched text"],
			["UK Datahub","London Dev","log1.txt","UK Matched text"],
			["UK Datahub","London Dev","log2.txt","Some more matched text"]
		]
	}

	res.send(data);
}
