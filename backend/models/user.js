"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      profileId: DataTypes.INTEGER
    },
    {
      paranoid: true
    }
  );
  User.associate = function (models) {
    // associations can be defined here
    // User.Group = User.belongsToMany( models.UserGroup, { through: 'jnc_UserGroups' } )
    // User.belongsToMany( models.UserGroup, { through: 'jnc_UserGroups' } )
    User.Group = User.belongsToMany( models.UserGroup, { through: models.jnc_UserGroups, foreignKey: 'userId', timestamps: false } )
  };  
  return User;
};
