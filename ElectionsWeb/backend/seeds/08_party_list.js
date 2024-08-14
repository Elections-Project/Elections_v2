exports.seed = function(knex) {
    return knex('partyList').del()
      .then(function () {
        return knex('partyList').insert([
          { party_id: 1, name: 'Party A', logo: 'logo_party_a.png', count: 0, organizer: 'John Doe', Election_id: 1 },
          { party_id: 2, name: 'Party B', logo: 'logo_party_b.png', count: 0, organizer: 'Jane Smith', Election_id: 2 }
        ]);
      });
  };