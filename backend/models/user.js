"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // _id: {
      //   field: 'id',
      //   primaryKey: true,
      //   autoIncrement: true,
      //   type: DataTypes.INTEGER,
      // },
      // profileID: {
      //   type: DataTypes.INTEGER,
      //   // allowNull: false,
      //   references: {
      //     model: 'Profiles',
      //     key: 'id'
      //   }
      // },
    },
    {
      paranoid: true
    }
  );
  User.associate = function (models) {
    // associations can be defined here
    // User.Group = User.belongsToMany( models.UserGroup, { through: 'jnc_UserGroups' } )
    // User.belongsToMany( models.UserGroup, { through: 'jnc_UserGroups' } )
    User.Group = User.belongsToMany( models.UserGroup, { through: "jnc_UserGroups", foreignKey: 'userId', timestamps: false } )
    // User.belongsTo( models.Profile, { foreignKey: 'profileID' })
    User.hasOne( models.Profile, {foreignKey: "id", targetKey: "id", constraints:false })
    // User.belongsTo( models.Profile, {foreignKey: "id", targetKey: "id"})
  };  
  return User;
};
