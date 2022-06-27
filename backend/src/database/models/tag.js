module.exports = (_sequelize, DataTypes) => {
  const Tag = ('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tag: DataTypes.STRING,
  }, {
    timestamps: false,
    modelName: 'Tag',
  });
  return Tag;
};
