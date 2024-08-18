exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('Lists').insert([
        { name: 'Party List', org: 'Organization A', logo: 'logo1.png', circle: 'Circle 1', file_path: 'path/to/file1' },
        { name: 'Local List', org: 'Organization B', logo: 'logo2.png', circle: 'Circle 2', file_path: 'path/to/file2' },
      ]);
    });
};
