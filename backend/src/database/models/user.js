module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
  }, {
    // timestamps: false,
    modelName: 'User',
  });

  // User.associate = (models) => {
  //   User.belongsTo(models.TaskUser, {
  //     // Deve ter o nome referente a coluna associada na tabela de passagem
  //     foreignKey: 'userId',
  //     as: 'user',
  //   });
  // };
  return User;
};
