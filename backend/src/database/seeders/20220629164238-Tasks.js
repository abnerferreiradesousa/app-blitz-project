module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Tasks', [
      {
        subject: 'Adicionar um novo menu a rota \'/home\'',
        status: 'pendente',
      },
      {
        subject: 'Implementar rota /login da API',
        status: 'completo',
      },
      {
        subject: 'Adicionar contador de pessoas que acessam o site',
        status: 'pendente',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
