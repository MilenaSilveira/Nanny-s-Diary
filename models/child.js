const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Child extends Model {}

Child.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    child_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diet_restrictions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medications: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    other: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'child',
  }
);

module.exports = Child;