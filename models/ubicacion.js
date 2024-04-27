'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ubicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ubicacion.hasMany(models.Activo,{
        onDelete: 'SET NULL'
      })
    }
  }
  Ubicacion.init({
    
    desc: {
      type:DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type:DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Ubicacion',
    tableName: 'Ubicaciones',
    name: {
      singular:'ubicacion',
      plural: 'ubicaciones'
    }
  });
  return Ubicacion;
};