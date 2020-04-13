import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";

// import bodyParser from "body-parser";
import express from "express";
import {check, query, validationResult, checkSchema, matchedData} from "express-validator";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "../models";
import Op from "sequelize";

// import {events,handlers} from "../events";
import * as events from "../events";

export default async function initializeAPI(app, config, logger) {
  console.log("WAAAA? ",db.sequelize.sync,db.sequelize.transaction,db.sequelize)
  await db.sequelize.sync();

  const graphqlServer = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: { db }
  });

  // const app = express();
  graphqlServer.applyMiddleware({ app });

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

  // const router = express.Router();

  // app.use(bodyParser);
  app.use(express.json());
  
  app.post( '/notify/:token?', checkSchema({
    token: {
      // in: ['body','headers','route','query'],
      exists: true,
      isLength: {
        errorMessage: 'token should be at least 7 chars long',
        // Multiple options would be expressed as an array
        options: { min: 3 }
      }
    },
    data: {
      in: ['body'],
      exists: {
        errorMessage: "Data must be present and in JSON format.",
      },
    }
  }),
  async (req, res) => {
    console.log("Received notify post ", events);

    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json( validationErrors.array() );
    }

    let validatedData = matchedData(req);
    let notifierToken = validatedData.token;

    let notifier = await db.Notifier.findOne({
      where:{
        token: notifierToken,
        // active: 
      }
    })

    if (notifier===null) {
      return res.status(400).json(errorStructure('Token not found.'));
    }

    console.log("found notifier: ",db.transaction);
    
    await events.TriggerEvent('NotifierReceived', {
      notifier,
      data: req.body.data
    });

    return res.send(true)
    // return res.json(notifier);
  })

  logger.info(`Finished initializing API.`);
  return graphqlServer;
}

function errorStructure(msg) {
  return {
    value: 0,
    msg: msg,
    param: "",
    location: ""
  }
}

  // app.get("/api", async (req, res) => {
  //   // res.json({ the: "Hello World!!!!fs!" });
  //   let results = await db.User.findAll();
  //   console.log("RES: ",typeof results[0].id );
  //   res.json(results)
  // });