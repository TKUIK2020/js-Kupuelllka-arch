function route(pathname) {
console.log("About to route a request for " + pathname);
}
exports.route = route;
let server = require("./server");
let router = require("./router");
server.start(router.route);
