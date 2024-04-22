'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activo.belongsToMany(models.Tag,{through:'ActivoTag'});
      Activo.belongsTo(models.Responsable);
      Activo.belongsTo(models.Ubicacion);
    }
  }
  Activo.init({
    
    numSerie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    numInventario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    responsableId: DataTypes.INTEGER,
    ubicacionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Activo',
  });
  return Activo;
};