"use strict";

// import initializeAPI from "./api";

// called when importing the file

// console.log("index.js");

// import initializeAPI from "./api";
// export default initializeAPI;



export {Handler} from "./handler"; 
export * from "./handler"; 
// export default events =  {handlers};
// export {handlers as default}

// import * as "./resolvers"
// export 

import {NotifierHandler, registeredHandlers as handlerTypes} from "./handler";

// var handlerTypes = {
//   NotifierReceived: new NotifierHandler()
// }



export async function TriggerEvent( eventType, data ) {
  console.log(`Triggering event: ${eventType} with args: ${data}`);

  let handler = handlerTypes[eventType];
  console.log(handler);
  try {
    let results = await handler.run( data );
  } catch (error) {
    console.error(`handler error: ${error}`)
  }
  
  
  console.log("done");
}