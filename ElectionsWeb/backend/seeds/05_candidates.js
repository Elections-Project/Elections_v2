exports.seed = function(knex) {
    return knex('Candidates').del()
      .then(function () {
        return knex('Candidates').insert([
          { N_Id: 'user1', Election_id: 1, Circle: 1, LostId: 1 },
          { N_Id: 'user2', Election_id: 2, Circle: 2, LostId: 2 }
        ]);
      });
  };