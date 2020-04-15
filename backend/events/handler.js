import { config, logger } from "../config";

import { Sequelize, sequelize } from "sequelize";
import db from "../models";

export var registeredHandlers = {};

class Handler {
  constructor() {
    console.log('super constr')
  }

  setName(name) {
    this.name = name;
  }

  async runEventHandler(name, data) {
    this.setName(name);
    return await this[name](data);
  }

  static eventHandler(descriptor) {
    descriptor.descriptor.value.eventHandler = true;
    return descriptor
  }

  static registerEventHandler(className) {
    var handler = new className();
    var methods = Object.getOwnPropertyNames(handler.__proto__);
    methods.shift();

    for (const handlerName of methods) {
      if (handler[handlerName].eventHandler) {
        if (registeredHandlers[handlerName] === undefined) {
          registeredHandlers[handlerName] = handler;
        } else {
          logger.error(
            `Event handler with name '${handlerName}' is already registered, ignoring this one.`
          );
        }
      }
    }
  }

  static async TriggerEvent(eventType, data) {
    // console.log(`static Triggering event: ${eventType} with args: ${data}`);

    let handler = registeredHandlers[eventType];
    try {
      // handler.setName(eventType);
      // let results = await handler[eventType](data);
      let results = await handler.runEventHandler(eventType, data);
    } catch (error) {
      console.error(`handler error: ${error}`);
    }

    console.log("done");
  }
}
export default Handler;


export
class NotifierHandler extends Handler {
  constructor() {
    super();
  }

  @Handler.eventHandler
  async NotifierReceived({ notifier, data }) {
    let trn = await db.sequelize.transaction();

    try {
      var event = await db.Event.newEvent(
        this.name,
        {
          data: data,
          sender: {
            ip: "0.0.0.0"
          }
        },
        { transaction: trn }
      );

      await trn.commit();
    } catch (error) {
      await trn.rollback();
      logger.error(`Failed to insert notification data on notifier received: ${error}`);
    }

    // Inserted the data, now generate the notification.
    let { title, renderedData } = { a: 1, b: 1 };
    await notifier.renderNotification(event);

    console.log("done run notifhandle", title, renderedData);
  }
}
Handler.registerEventHandler(NotifierHandler);
// Handler.registerEventHandler("NotifierReceived", NotifierHandler);
