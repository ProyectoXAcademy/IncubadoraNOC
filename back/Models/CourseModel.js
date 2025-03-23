const { DataTypes } = require('sequelize');
const { dbConfig } = require('../Config');

const courseModel = dbConfig.sequelize.define("Courses", {
  course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  inscription_requeriments: {
    type: DataTypes.STRING,
    allowNull: true
  },
  approval_conditions: {
    type: DataTypes.STRING,
    allowNull: true
  },
  teacher_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'user_id'
    }
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true
  },

  // NUEVOS CAMPOS
  start_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true
  },
  modality: {
    type: DataTypes.ENUM('Presencial', 'Online', 'Híbrido'),
    allowNull: false,
    defaultValue: 'Online'
  },
  level: {
    type: DataTypes.ENUM('Básico', 'Intermedio', 'Avanzado'),
    allowNull: true
  },

  long_description: {
    type: DataTypes.TEXT,
    allowNull: true
  }

}, {
  timestamps: false
});

module.exports = courseModel;
