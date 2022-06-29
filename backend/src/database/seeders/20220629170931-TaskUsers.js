module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('TaskUsers', [
      {
        userId: 1,
        taskId: 2,
      },
      {
        userId: 2,
        taskId: 3,
      },
      {
        userId: 1,
        taskId: 1,
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('TaskUsers', null, {});
  },
};
