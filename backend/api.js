import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";


export default async function initializeAPI(app) {
  const graphqlServer = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: { db }
  });

  // const app = express();
  graphqlServer.applyMiddleware({ app });

  await db.sequelize.sync();
  // db.sequelize.sync().then(() => {
  //   // populate author table with dummy data
  //   db.User.bulkCreate(
  //     times(10, () => ({
  //       profileId: 2
  //     }))
  //   );
  //   // populate post table with dummy data
  //   // db.post.bulkCreate(
  //   //   times(10, () => ({
  //   //     title: faker.lorem.sentence(),
  //   //     content: faker.lorem.paragraph(),
  //   //     authorId: random(1, 10)
  //   //   }))
  //   // );



  app.get("/api", (req, res) => {
    res.json({ the: "Hello World!!!!fs!" });
  });


  return graphqlServer;
}