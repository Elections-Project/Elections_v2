exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Candidates').del()
    .then(function () {
      // Inserts seed entries
      return knex('Candidates').insert([
        {N_Id: 1, Election_id: 1, Circle: 1, ListId: 1},
        {N_Id: 2, Election_id: 1, Circle: 2, ListId: 2},
        {N_Id: 3, Election_id: 2, Circle: 2, ListId: 3}
      ]);
    });
};