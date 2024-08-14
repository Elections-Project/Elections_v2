exports.seed = function(knex) {
    return knex('Lists').del()
      .then(function () {
        return knex('Lists').insert([
          { list_id: 1, name: 'List A', list: 'A', logo: 'logo_a.png', candidate: 'user1' },
          { list_id: 2, name: 'List B', list: 'B', logo: 'logo_b.png', candidate: 'user2' }
        ]);
      });
  };