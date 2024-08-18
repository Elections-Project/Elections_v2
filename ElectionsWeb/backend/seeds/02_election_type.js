exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ElectionType').del()
    .then(function () {
      // Inserts seed entries
      return knex('ElectionType').insert([
        {Election_type: 'Party'},
        {Election_type: 'Local'},
      ]);
    });
};
