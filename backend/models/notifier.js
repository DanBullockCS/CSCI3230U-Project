'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notifier = sequelize.define('Notifier', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    notifierGroupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NotifierGroups',
        key: 'id'
      }
    },
    token: {
      type: DataTypes.UUID,
      defaultValue: '00000000-0000-0000-0000-000000000000',
      allowNull: false,
    },
    extraData: DataTypes.JSON
  }, {});
  Notifier.associate = function(models) {
    // associations can be defined here
    // Notifier.hasOne( models.NotifierGroup )
    Notifier.Group = Notifier.belongsTo( models.NotifierGroup, {foreignKey: 'notifierGroupID' } )
  };
  return Notifier;
};