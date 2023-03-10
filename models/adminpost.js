const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AdminPost extends Model {}

AdminPost.init(
  {
      meals: {
        type: DataTypes.STRING,
      },
      activities: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nap_schedule: {
        type: DataTypes.STRING,
      },
      child_mood: {
        type: DataTypes.STRING,
      },
      other: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
  },
  {
    sequelize
  }
);

module.exports = AdminPost;