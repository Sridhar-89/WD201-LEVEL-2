const http = require("http");
const fs = require("fs");
let homeContent = "";
let projectContent = "";

fs.readFile("project.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("registration.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});
http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/registration":
        response.write(projectContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(5000);