'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let user = await db.User.create({
      Profile: { displayName: "First User" },
      UserGroups: [ {displayName: "Test User Group 1"} ]
    }, {
      include: [
        db.Profile,
        db.UserGroup
      ]
    });
  },

  down: async (queryInterface, Sequelize) => {
  }
};
