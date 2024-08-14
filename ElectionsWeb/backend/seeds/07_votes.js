exports.seed = function(knex) {
    return knex('Votes').del()
      .then(function () {
        return knex('Votes').insert([
          { Id: 1, candidate_id: 'user1', voter_id: 'user2', isLocal: true, isParty: false, isWhite: false },
          { Id: 2, candidate_id: 'user2', voter_id: 'user1', isLocal: false, isParty: true, isWhite: false }
        ]);
      });
  };