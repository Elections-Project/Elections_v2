exports.seed = function(knex) {
    return knex('Candidates').del()
      .then(function () {
        return knex('Candidates').insert([
          { N_Id: '1', Election_id: 1, Circle: 1, LostId: 1 },
          { N_Id: '2', Election_id: 2, Circle: 2, LostId: 2 }
        ]);
      });
  };