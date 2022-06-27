module.exports = (_sequelize, DataTypes) => {
  const Task = ('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    subject: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    timestamps: false,
    modelName: 'Task',
  });
  return Task;
};
