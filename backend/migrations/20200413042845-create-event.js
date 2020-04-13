'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('EventTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.JSON
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // deletedAt: {
      //   type: Sequelize.DATE
      // }
    },{
      updatedAt: false,
      timestamps: false
    });

    await queryInterface.bulkInsert('EventTypes', [{
      name: 'NotifierReceived',
      // createdAt: new Date(),
      // deletedAt: new Date()
    }
    ,{
      name: 'admin',
      // createdAt: new Date(),
      // deletedAt: new Date()
    },
  ]);

    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'EventTypes',
          key: 'id'
        }
      },
      data: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    },{
      paranoid: true,
      updatedAt: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
    return queryInterface.dropTable('EventTypes');
  }
};