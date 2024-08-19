exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('Lists').insert([
        {list_id: 1,name: 'قائمة الأمل', org: 'منظمة الأمل', logo: 'logo1.png', circle: 'الدائرة 1', candidate: 1, file_path: 'file1.pdf'},
        {list_id: 2,name: 'قائمة النجاح', org: 'منظمة النجاح', logo: 'logo2.png', circle: 'الدائرة 2', candidate: 2, file_path: 'file2.pdf'},
        {list_id: 3,name: 'قائمة الوحدة', org: 'منظمة الوحدة', logo: 'logo3.png', circle: 'الدائرة 3', candidate: 3, file_path: 'file3.pdf'}
      ]);
    });
};
