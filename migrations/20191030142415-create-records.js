'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      时间戳记: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.STRING
      },
      Factory_id: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      行業別: {
        type: Sequelize.STRING
      },
      Who: {
        type: Sequelize.STRING
      },
      第幾次去: {
        type: Sequelize.STRING
      },
      距上次拜訪: {
        type: Sequelize.STRING
      },
      Summary: {
        type: Sequelize.STRING
      },
      後追與否: {
        type: Sequelize.STRING
      },
      商品詢問: {
        type: Sequelize.BOOLEAN
      },
      Prise: {
        type: Sequelize.STRING
      },
      Prise_level: {
        type: Sequelize.STRING
      },
      地區: {
        type: Sequelize.STRING
      },
      寄樣報價else: {
        type: Sequelize.STRING
      },
      回訪頻率: {
        type: Sequelize.STRING
      },
      喜悅: {
        type: Sequelize.STRING
      },
      名字當時情緒喜悅: {
        type: Sequelize.STRING
      },
      名字當時情緒憤怒: {
        type: Sequelize.STRING
      },
      名字當時情緒悲傷: {
        type: Sequelize.STRING
      },
      名字當時情緒恐懼: {
        type: Sequelize.STRING
      },
      名字當時情緒厭惡: {
        type: Sequelize.STRING
      },
      名字當時情緒驚奇: {
        type: Sequelize.STRING
      },
      名字當時情緒羡慕: {
        type: Sequelize.STRING
      },
      名字當時情緒窘迫: {
        type: Sequelize.STRING
      },
      名字當時情緒内疚: {
        type: Sequelize.STRING
      },
      名字當時情緒害羞: {
        type: Sequelize.STRING
      },
      名字當時情緒驕傲: {
        type: Sequelize.STRING
      },
      憤怒: {
        type: Sequelize.STRING
      },
      悲傷: {
        type: Sequelize.STRING
      },
      恐懼: {
        type: Sequelize.STRING
      },
      厭惡: {
        type: Sequelize.STRING
      },
      驚奇: {
        type: Sequelize.STRING
      },
      羡慕: {
        type: Sequelize.STRING
      },
      窘迫: {
        type: Sequelize.STRING
      },
      内疚: {
        type: Sequelize.STRING
      },
      害羞: {
        type: Sequelize.STRING
      },
      驕傲: {
        type: Sequelize.STRING
      },
      友善度: {
        type: Sequelize.STRING
      },
      友善度2: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('records');
  }
};
