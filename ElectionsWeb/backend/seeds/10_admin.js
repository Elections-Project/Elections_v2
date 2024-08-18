exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('Admin').insert([
        {name: 'Super Admin', email: 'admin@example.com', password: 'hashed_password', role: 'Super Admin'},
        {name: 'Moderator', email: 'moderator@example.com', password: 'hashed_password', role: 'Moderator'},
      ]);
    });
};
