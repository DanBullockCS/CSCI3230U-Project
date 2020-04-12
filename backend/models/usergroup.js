'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    extraData: DataTypes.JSON
  }, {});
  UserGroup.associate = function(models) {
    // associations can be defined here
    UserGroup.Users = UserGroup.belongsToMany( models.User, { through: models.jnc_UserGroups, foreignKey: 'userGroupID', timestamps: false } )
    // UserGroup.belongsToMany( models.User, { through: models.jnc_UserGroups } )
  };
  return UserGroup;
};