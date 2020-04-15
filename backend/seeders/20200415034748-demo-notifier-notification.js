'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await db.NotifierGroup.create({
      displayName: "Test Group 1",
      ownerID: 1,
      Notifiers: [ {
        token: '123',
        extraData: { hi: 'test' },
        // NotificationData: [ { data: {title:'Hello', body: "World"} } ]
      } ]
    },
    {
      include: [ 
        {
          // association: db.NotifierGroup.Notifiers,
          model: db.Notifier,
          include: [db.Event]
        }
        ]
    });

    // return db.sequelize.sync();
  },

  down: async (queryInterface, Sequelize) => {
  }
};
