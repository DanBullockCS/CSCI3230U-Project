// const express = require("express"),
//   bodyParser = require("body-parser"),
//   cors = require("cors"),
//   history = require("connect-history-api-fallback");
// // path = require("path");

// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.json());
// app.use(cors());

const port = process.env.PORT || 8081;

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


import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
  // populate author table with dummy data
  db.User.bulkCreate(
    times(10, () => ({
      profileId: 2,
    }))
  );
  // populate post table with dummy data
  // db.post.bulkCreate(
  //   times(10, () => ({
  //     title: faker.lorem.sentence(),
  //     content: faker.lorem.paragraph(),
  //     authorId: random(1, 10)
  //   }))
  // );

  // console.log("STARTED");

  app.listen({ port: port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
});