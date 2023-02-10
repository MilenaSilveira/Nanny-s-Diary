const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Admin extends Model {}

// create fields/columns for Post model
Admin.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
     
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'admin'
    }
  );
  
  module.exports = Admin;