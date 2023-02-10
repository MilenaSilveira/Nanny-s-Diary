const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AdminPost extends Model {}

AdminPost.init(
  {
      meals: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      activities: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      nap_schedule: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      child_mood: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      other: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true
        }
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
