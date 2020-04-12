'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
  }, {});
  Profile.associate = function (models) {
    // associations can be defined here
  };
  return Profile;
};