'use strict';
// import {Model} from "sequelize";
const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  // const Event = sequelize.define('Event', {
  //   type: DataTypes.SMALLINT,
  //   data: DataTypes.JSON
  // }, {});
  // Event.associate = function(models) {
  //   // associations can be defined here
  // };

  class EventType extends Model {
    static associate(models) {
      console.log("EventType assoc",models);
      EventType.hasMany( models.Event, { foreignKey: 'type' } );
    }
  }

  EventType.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.JSON,
    }
  }, {
    sequelize,
    // modelName: "Event"
    timestamps: false
    // paranoid: true,
    // updatedAt: null,
  });

  return EventType;
};