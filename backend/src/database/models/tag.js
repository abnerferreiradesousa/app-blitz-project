module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
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
