// const logger = require("pino")();
console.log("before model import");

import "./models";
console.log("after model import");
import {config, logger} from "./config";

function main() {
  logger.info(`Begun initialization of '${config.name}' backend and frontend`);
}

main();





// const express = require("express"),
//   bodyParser = require("body-parser"),
//   cors = require("cors"),
//   history = require("connect-history-api-fallback");
// // path = require("path");

// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/api", (req, res) => {
//   res.json({ the: "Hello World!" });
// });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// const { PORT = 3000 } = process.env;

// API
// configureAPI(app);

// UI
// const publicPath = path(__dirname, "../../dist");
// const staticConf = { maxAge: "1y", etag: false };

// app.use(express.static(publicPath, staticConf));
// app.use("/", history());

// Go
// app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
