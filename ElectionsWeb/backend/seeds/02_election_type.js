exports.seed = function(knex) {
    return knex('ElectionType').del()
      .then(function () {
        return knex('ElectionType').insert([
          { id: 1, Election_type: 'Party' },
          { id: 2, Election_type: 'Local' }
        ]);
      });
  };