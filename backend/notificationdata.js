'use strict';

module.exports = (sequelize, DataTypes) => {
  const NotificationData = sequelize.define('NotificationData', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    notifierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: sequelize.models.Notifier,
        key: 'id'
      }
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    sender: DataTypes.JSON
  }, {
    paranoid: true,
  });
  NotificationData.associate = function(models) {
    // associations can be defined here
    NotificationData.Notifier = NotificationData.belongsTo( models.Notifier , { foreignKey: 'notifierID' } );
  };
  return NotificationData;
};