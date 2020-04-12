'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Notifiers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      notifierGroupID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'NotifierGroups',
          key: 'id'
        }
      },
      token: {
        type: Sequelize.UUID,
        defaultValue: '00000000-0000-0000-0000-000000000000',
        allowNull: false,
      },
      extraData: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Notifiers');
  }
};