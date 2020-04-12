"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
      },
      profileId: DataTypes.BIGINT
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
