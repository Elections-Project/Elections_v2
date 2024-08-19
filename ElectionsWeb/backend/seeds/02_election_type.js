exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ElectionType').del()
    .then(function () {
      // Inserts seed entries
      return knex('ElectionType').insert([
        {id:1,Election_type: 'Party'},
        {id:2,Election_type: 'Local'},
      ]);
    });
};
