'use strict';

// const User = require('../models/user.js');
// import db from "../models";
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // await db.sequelize.sync({force:true});
    
    // await db.NotifierGroup.create({
    //   displayName: "test",
    //   Notifiers: [ {extraData: { hi: 'tst' } } ]
    // },
    // {
    //   include: [ db.NotifierGroup.Notifiers
    //   ]
    // });
    await db.NotifierGroup.create({
      displayName: "Test Group 1",
      Notifiers: [ {token: '00000000-0000-0000-0000-000000000001', extraData: { hi: 'tst' } } ]
    },
    {
      include: [ db.Notifier ]
    });

    return db.User.create({
      profileId: 1,
      UserGroups: [ {displayName: "Test User Group 1"} ]
    }, {
      include: [
        db.UserGroup
      ]
    });
    
    // return Promise.all([
    //   queryInterface.bulkInsert('Users', [{
    //     profileId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }]),
    //   queryInterface.bulkInsert('Users', [{
    //     profileId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }]),
    // ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
