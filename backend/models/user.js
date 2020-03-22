"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT,
        primary: true,
        autoIncrement: true
      },
      profileId: DataTypes.BIGINT
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
