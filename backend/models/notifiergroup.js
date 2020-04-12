'use strict';
module.exports = (sequelize, DataTypes) => {
  const NotifierGroup = sequelize.define('NotifierGroup', {
    displayName: DataTypes.STRING,
    extraData: DataTypes.JSON
  }, {});
  NotifierGroup.associate = function(models) {
    // associations can be defined here
    NotifierGroup.Notifiers = NotifierGroup.hasMany( models.Notifier, {foreignKey: 'notifierGroupID' } )
  };
  return NotifierGroup;
};