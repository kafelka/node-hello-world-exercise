

const server = http.createServer()
server.on("request", function handleRequest(req, res) {
	res.end()
})
server.listen(3999, function() {
	console.log("Listening on port 4000 for incoming requests.")
	console.log("Try visiting http://localhost:4000 in your browser")
})
