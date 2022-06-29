module.exports = (sequelize, DataTypes) => {
  const TaskUser = ('TaskUser', {
    userId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER,
  }, {
    modelName: 'TaskUser',
    timestamps: false,
  });

  TaskUser.associate = (models) => {
    models.Task.belongsToMany(models.User, {
      as: 'tasks',
      through: TaskUser,
      foreignKey: 'userId',
      otherKey: 'taskId',
    });

    models.User.belongsToMany(models.Task, {
      as: 'users',
      through: TaskUser,
      foreignKey: 'taskId',
      otherKey: 'userId',
    });
  };
  return TaskUser;
};
