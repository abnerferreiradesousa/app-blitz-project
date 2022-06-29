module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaskUsers', {
      userId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: {
          model: 'User',
          key: 'id',
        },
      },
      taskId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: {
          model: 'Task',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('TaskUsers');
  },
};
