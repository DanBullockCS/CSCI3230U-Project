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
        type: Sequelize.STRING,
        defaultValue: '',
        unique: true,
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
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Notifiers');
  }
};