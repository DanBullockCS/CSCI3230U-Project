import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";


import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

import initializeAPI from "./api";
import { config, logger } from "./config";

async function main() {
  logger.info(
    `Begun initialization of ${config.name} backend & frontend.\n\tPort: ${config.port}`
  );

  const app = await initializeApp(); // sets up express app and middleware

  const graphqlServer = await initializeAPI(app);
  
  app.listen({ port: config.port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${config.port}${graphqlServer.graphqlPath}`
    )
  );
  // await app.listen({ port: config.port } )
}

async function initializeApp() {
  const app = express();

  app.use(express.static("app/public"));

  return app;
}

if (!module.parent) {
  main()
    .then(text => {
      console.log("main then: ",text);
    })
    .catch(err => {
      console.error("main failed: ", err);
      // Deal with the fact the chain failed
    }); // this is the main module
}
