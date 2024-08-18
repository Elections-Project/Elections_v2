exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {N_Id: 1, name: 'John Doe', email: 'john@example.com', gender: 'Male', age: 30, city: 'City A', religion: 'Religion A', polling_address: 'Address A', isOrganizer: false, password: 'hashed_password', circle_id: 1},
        {N_Id: 2, name: 'Jane Smith', email: 'jane@example.com', gender: 'Female', age: 28, city: 'City B', religion: 'Religion B', polling_address: 'Address B', isOrganizer: true, password: 'hashed_password', circle_id: 2},
        {N_Id: 9, name: 'Jane Smith', email: 'janke@example.com', gender: 'Female', age: 28, city: 'City B', religion: 'Religion B', polling_address: 'Address B', isOrganizer: true, password: 'hashed_password', circle_id: 2},

      ]);
    });
};
