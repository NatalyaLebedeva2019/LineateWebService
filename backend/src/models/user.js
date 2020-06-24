'use strict';

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(32),
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    isClient: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isCourier: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
    
  User.sync({ force: false });
  return User;
};
