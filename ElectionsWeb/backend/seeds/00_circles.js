exports.seed = function(knex) {
    return knex('Circles').del()
      .then(function () {
        return knex('Circles').insert([
          {circle_id: 1, name: 'Circle 1', city: 'City A', numOfCandidat: 10, count: 100},
          {circle_id: 2, name: 'Circle 2', city: 'City B', numOfCandidat: 8, count: 80},
          // More circle entries
        ]);
      });
  };
  

