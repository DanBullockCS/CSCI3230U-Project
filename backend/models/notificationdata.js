'use strict';

module.exports = (sequelize, DataTypes) => {
  const NotificationData = sequelize.define('NotificationData', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    creator: DataTypes.INTEGER,
    data: DataTypes.JSON,
    sender: DataTypes.JSON
  }, {});
  NotificationData.associate = function(models) {
    // associations can be defined here
  };
  return NotificationData;
};