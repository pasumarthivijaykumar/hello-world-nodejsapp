var http = require('http');

const PORT = 17783;

function requestHandler(req, res) {
	res.end(`Hello World, welcome!!!  you are accessing docker container running ${process.platform}`);
}

var server = http.createServer(requestHandler);

server.listen(PORT, function(){
	console.log(`${process.env.NODE_ENV} server listening on port: ${PORT}. CTRL-C to exit.`);
});