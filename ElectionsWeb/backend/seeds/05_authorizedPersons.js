exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('authorizedPersons').del()
      .then(function () {
        // Inserts seed entries
        return knex('authorizedPersons').insert([
          { auth: 'مفوض 1' }, // إدخال اسم الشخص المفوض
          { auth: 'Authorized Person 2' }, // إدخال اسم شخص آخر مفوض
          { auth: 'Authorized Person 3' }  // إدخال اسم شخص آخر مفوض
        ]);
      });
  };