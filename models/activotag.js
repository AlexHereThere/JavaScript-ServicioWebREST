'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActivoTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActivoTag.init({
    activoId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ActivoTag',
  });
  return ActivoTag;
};