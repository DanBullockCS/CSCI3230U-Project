import { config, logger } from "../config";

import {Sequelize,sequelize} from "sequelize";
import db from "../models";

export var registeredHandlers = {};

class Handler {
  constructor() {}

  setName(name) {
    this.name = name;
  }

  static registerEventHandler(handlerName, handlerClass) {
    if (registeredHandlers[handlerName] === undefined) {
      registeredHandlers[handlerName] = new handlerClass();
      registeredHandlers[handlerName].setName(handlerName);
    } else {
      logger.error(
        `Event handler with name '${handlerName}' is already registered, ignoring this one.`
      );
    }
  }
}
export default Handler;

export class NotifierHandler extends Handler {
  constructor() {
    super()

  }

  async run({ notifier, data }) {
    console.log("notif handler run. ");

    let trn = await db.sequelize.transaction();

    try {
      let notificationData = await db.NotificationData.create({
        notifierID: notifier.id,
        data: data,
        sender: {
          ip: '0.0.0.0',
        }
      }, {
        include: [
          db.Notifier
        ],
        transaction: trn
      });

      let event = await db.Event.newEvent( this.name, {
        notificationDataID: notificationData.id
      }, {transaction: trn} );

      await trn.commit();
    } catch (error) {
      await trn.rollback()
      logger.error("Failed to insert notification data on notifier received: ", error);
    }


    console.log("done run notifhandle");

  }
}
Handler.registerEventHandler("NotifierReceived", NotifierHandler);
