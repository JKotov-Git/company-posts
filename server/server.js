const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const cors = require("cors");

server.use(cors());
server.use(router);
server.listen(8000, () => {
  console.log("JSON server running");
});
