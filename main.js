const http = require("http");
const {createApi} = require("./src/createApi.js");
const api = createApi();
const server = http.createServer(api);


server.listen(3000);
