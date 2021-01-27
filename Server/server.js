let http = require("http");
let url = require("url");
var generateImage = require('random-image-creator');
function start(route) {
function onRequest(request, response) {
let pathname = url.parse(request.url).pathname;
console.log("Request for " + pathname + " received.");
route(pathname);
response.writeHead(200, {"Content-Type": "text/html"});
let b = generateImage(400,600);
response.write("<img src="+b+">");
response.end();
}
http.createServer(onRequest).listen(3000);
console.log("Server has started.");
}
exports.start = start;

