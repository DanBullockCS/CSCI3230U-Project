'use strict';

module.exports = (sequelize, DataTypes) => {
  const NotificationData = sequelize.define('NotificationData', {
    id: DataTypes.BIGINT,
    creator: DataTypes.BIGINT,
    data: DataTypes.JSON,
    sender: DataTypes.JSON
  }, {});
  NotificationData.associate = function(models) {
    // associations can be defined here
  };
  return NotificationData;
};