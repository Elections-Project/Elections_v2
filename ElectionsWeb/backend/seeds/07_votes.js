exports.seed = function(knex) {
    return knex('Votes').del()
      .then(function () {
        return knex('Votes').insert([
          { Id: 1, candidate_id: '1', voter_id: '2', isLocal: true, isParty: false, isWhite: false },
          { Id: 2, candidate_id: '1', voter_id: '2', isLocal: false, isParty: true, isWhite: false }
        ]);
      });
  };