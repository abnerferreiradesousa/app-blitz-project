module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Henry Cavil',
          password: '123654',
        },
        {
          name: 'Hugh Grant',
          password: '456321',
        },
      ],
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
