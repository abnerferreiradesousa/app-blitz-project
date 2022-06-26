module.exports = (sequelize, DataTypes) => {
  const User = ('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    modelName: 'User',
  });
  return User;
};
