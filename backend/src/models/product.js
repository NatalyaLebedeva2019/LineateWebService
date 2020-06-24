'use strict';

module.exports = (sequelize, DataTypes) => {
  let Product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Product.sync({ force: false });
  
  return Product;
};
