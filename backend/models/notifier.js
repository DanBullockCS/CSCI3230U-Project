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
      type: DataTypes.STRING,
      defaultValue: '',
      unique: true,
      allowNull: false,
    },
    extraData: DataTypes.JSON
  }, {
    paranoid: true,
  });
  Notifier.associate = function(models) {
    // associations can be defined here
    // Notifier.hasOne( models.NotifierGroup )
    Notifier.Group = Notifier.belongsTo( models.NotifierGroup, {
      foreignKey: 'notifierGroupID',
      scope: {
        status: 'open'
      }
    } )

    Notifier.Data = Notifier.hasMany( models.NotificationData, { foreignKey: 'notifierID' } );
  };
  return Notifier;
};