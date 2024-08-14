exports.seed = function(knex) {
    return knex('Voters').del()
      .then(function () {
        return knex('Voters').insert([
          { N_Id: 'user1' },
          { N_Id: 'user2' }
        ]);
      });
  };