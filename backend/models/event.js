'use strict';
// import {Model} from "sequelize";
const { Sequelize, Model, DataTypes } = require("sequelize");
// const db = require("../models");
// import db from "../models";

module.exports = (sequelize, DataTypes) => {
  // const Event = sequelize.define('Event', {
  //   type: DataTypes.SMALLINT,
  //   data: DataTypes.JSON
  // }, {});
  // Event.associate = function(models) {
  //   // associations can be defined here
  // };
  let db = sequelize.models;

  class Event extends Model {
    constructor(values, options, a) {
      super(values, options)
    }
    static associate(models) {
      console.log("Event assoc",models);
      Event.belongsTo(models.EventType, {foreignKey: 'type'});
    }

    static async newEvent(eventType, data, options={}) {
      console.log("WAT: ",this,"db: ",db,'  !');
      let type = await sequelize.models.EventType.findOne({ where:{ name: eventType } },options);

      let event = await db.Event.create({
        type: type.id,
        data: data
      }, Object.assign( {
        include: [ db.EventType ],
        // updatedAt: false,
        // timestamps: false,
        // silent: true,
      }, options));

      return event;
    }
  }

  Event.init({
    type: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EventTypes',
        key: 'id'
      }
    },
    data: {
      type: DataTypes.JSON,
    }
  }, {
    sequelize,
    // modelName: "Event"
    paranoid: true,
    updatedAt: false,
  });

  return Event;
};