'use strict';
module.exports = (sequelize, DataTypes) => {
  const invites = sequelize.define('records', {
    时间戳记: DataTypes.STRING,
    Date: DataTypes.STRING,
    Factory_id: DataTypes.STRING,
    Name: DataTypes.STRING,
    行業別: DataTypes.STRING,
    Who: DataTypes.STRING,
    第幾次去: DataTypes.STRING,
    距上次拜訪: DataTypes.STRING,
    Summary: DataTypes.STRING,
    後追與否: DataTypes.STRING,
    商品詢問: DataTypes.BOOLEAN,
    Prise: DataTypes.STRING,
    Prise_level: DataTypes.STRING,
    地區: DataTypes.STRING,
    寄樣報價else: DataTypes.STRING,
    回訪頻率: DataTypes.STRING,
    喜悅: DataTypes.STRING,
    名字當時情緒喜悅: DataTypes.STRING,
    名字當時情緒憤怒: DataTypes.STRING,
    名字當時情緒悲傷: DataTypes.STRING,
    名字當時情緒恐懼: DataTypes.STRING,
    名字當時情緒厭惡: DataTypes.STRING,
    名字當時情緒驚奇: DataTypes.STRING,
    名字當時情緒羡慕: DataTypes.STRING,
    名字當時情緒窘迫: DataTypes.STRING,
    名字當時情緒内疚: DataTypes.STRING,
    名字當時情緒害羞: DataTypes.STRING,
    名字當時情緒驕傲: DataTypes.STRING,
    憤怒: DataTypes.STRING,
    悲傷: DataTypes.STRING,
    恐懼: DataTypes.STRING,
    厭惡: DataTypes.STRING,
    驚奇: DataTypes.STRING,
    羡慕: DataTypes.STRING,
    窘迫: DataTypes.STRING,
    内疚: DataTypes.STRING,
    害羞: DataTypes.STRING,
    驕傲: DataTypes.STRING,
    友善度: DataTypes.STRING,
    友善度2: DataTypes.STRING,
  }, {});
  invites.associate = function(models) {
    // associations can be defined here
  };
  return invites;
};
