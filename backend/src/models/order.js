'use strict';

module.exports = (sequelize, DataTypes) => {
  let Order = sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    courier_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  Order.sync({ force: false });
  return Order;
};
