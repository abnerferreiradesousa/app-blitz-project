module.exports = (sequelize, DataTypes) => {
  const TaskUser = sequelize.define('TaskUser', {
    userId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER,
  }, {
    modelName: 'TaskUser',
    timestamps: false,
  });

  // Rota de login
  // Regra de negócio
  // Verificar se a tarefa já existe uma tarefa sendo feita...

  TaskUser.associate = (models) => {
    models.Task.belongsToMany(models.User, {
      as: 'users',
      through: TaskUser,
      foreignKey: 'taskId', // Direita
      otherKey: 'userId', // Esquerda
    });

    models.User.belongsToMany(models.Task, {
      as: 'tasks',
      through: TaskUser,
      foreignKey: 'userId',
      otherKey: 'taskId',
    });
  };

  return TaskUser;
};
