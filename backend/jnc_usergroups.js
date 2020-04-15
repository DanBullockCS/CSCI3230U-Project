'use strict';
module.exports = (sequelize, DataTypes) => {
  const jnc_UserGroups = sequelize.define('jnc_UserGroups', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    userGroupID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'UserGroups',
        key: 'id'
      }
    },
  }, {
    timestamps: false
  });
  jnc_UserGroups.associate = function(models) {
    // associations can be defined here
  };
  return jnc_UserGroups;
};