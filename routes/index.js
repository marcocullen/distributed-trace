
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

exports.postData = function(req, res) {
	var locations = req.param('locations', null);

	console.log('post data called');
	var data = { "aaData": [			
			["UK Datahub",locations[0],"log2.txt","Some more matched text"]
		]
	}
	res.send(data);
}
