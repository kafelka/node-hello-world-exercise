const http = require("http")

const server = http.createServer()
server.on("request", function handleRequest(req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"})
	res.write("Hello, World!")
	res.end()
})
server.listen(4000, function() {
	console.log("Listening on port 4000 for incoming requests.")
	console.log("Try visiting http://localhost:4000 in your browser")
})
