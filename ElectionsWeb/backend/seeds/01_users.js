exports.seed = function(knex) {
    return knex('Users').del()
      .then(function () {
        return knex('Users').insert([
          { N_Id: 'user1', name: 'John Doe', email: 'john.doe@example.com', gender: 'Male', age: 30, city: 'New York', religion: 'None', polling_address: '123 Main St', isOrganizer: false },
          { N_Id: 'user2', name: 'Jane Smith', email: 'jane.smith@example.com', gender: 'Female', age: 25, city: 'Los Angeles', religion: 'None', polling_address: '456 Elm St', isOrganizer: true }
        ]);
      });
  };