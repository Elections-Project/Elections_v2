exports.seed = function(knex) {
    return knex('Voters').del()
      .then(function () {
        return knex('Voters').insert([
          { N_Id: '1' },
          { N_Id: '2' }
        ]);
      });
  };