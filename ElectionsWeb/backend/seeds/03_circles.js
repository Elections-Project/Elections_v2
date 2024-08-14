exports.seed = function(knex) {
    return knex('Circles').del()
      .then(function () {
        return knex('Circles').insert([
          { circle_id: 1, name: 'Circle A', city: 'New York', numOfCandidat: 0, count: 0 },
          { circle_id: 2, name: 'Circle B', city: 'Los Angeles', numOfCandidat: 0, count: 0 }
        ]);
      });
  };