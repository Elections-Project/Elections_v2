// migrations/2024XXXXXXXXXX_create_initial_tables.js

exports.up = function(knex) {
    return knex.schema
      .createTable('Users', function(table) {
        table.string('N_Id').primary();
        table.string('name');
        table.string('email').unique();
        table.enum('gender', ['Male', 'Female', 'Other']);
        table.integer('age');
        table.string('city');
        table.string('religion');
        table.string('polling_address');
        table.boolean('isOrganizer').defaultTo(false);
      })
      .createTable('ElectionType', function(table) {
        table.increments('id').primary();
        table.string('Election_type').notNullable(); // e.g., 'Party' or 'Local'
      })
      .createTable('Circles', function(table) {
        table.increments('circle_id').primary();
        table.string('name').notNullable();
        table.string('city').notNullable();
        table.integer('numOfCandidat').defaultTo(0);
        table.integer('count').defaultTo(0);
      })
      .createTable('Lists', function(table) {
        table.increments('list_id').primary();
        table.string('name').notNullable();
        table.string('list').notNullable();
        table.string('logo');
        table.string('candidate').references('N_Id').inTable('Users').onDelete('CASCADE');
      })
      .createTable('Candidates', function(table) {
        table.string('N_Id').references('N_Id').inTable('Users').onDelete('CASCADE');
        table.integer('Election_id').references('id').inTable('ElectionType').onDelete('CASCADE');
        table.integer('Circle').references('circle_id').inTable('Circles').onDelete('CASCADE');
        table.integer('LostId').references('list_id').inTable('Lists').onDelete('CASCADE');
        table.primary(['N_Id', 'Election_id']);
        // Adding a unique constraint to N_Id
        table.unique('N_Id');
      })
      .createTable('Voters', function(table) {
        table.string('N_Id').references('N_Id').inTable('Users').onDelete('CASCADE');
        table.primary('N_Id');
      })
      .createTable('Votes', function(table) {
        table.increments('Id').primary();
        table.string('candidate_id').references('N_Id').inTable('Candidates').onDelete('CASCADE');
        table.string('voter_id').references('N_Id').inTable('Voters').onDelete('CASCADE');
        table.boolean('isLocal').defaultTo(false);
        table.boolean('isParty').defaultTo(false);
        table.boolean('isWhite').defaultTo(false);
      })
      .createTable('partyList', function(table) {
        table.increments('party_id').primary();
        table.string('name').notNullable();
        table.string('logo');
        table.integer('count').defaultTo(0);
        table.string('organizer').notNullable();
        table.integer('Election_id').unsigned().references('id').inTable('ElectionType').onDelete('CASCADE');
      })
    //   .createTable('localList', function(table) {
    //     table.increments('id').primary();
    //     table.string('name').notNullable();
    //     table.integer('count').defaultTo(0);
    //     table.string('candidateId').references('N_Id').inTable('Candidates').onDelete('CASCADE');
    //     table.integer('Election_id').unsigned().references('id').inTable('ElectionType').onDelete('CASCADE');
    //   })
      .createTable('payment', function(table) {
        table.increments('pay_id').primary();
        table.decimal('amount', 10, 2).notNullable(); // Adjust precision and scale as needed
        table.string('payment_method').notNullable(); // e.g., 'Credit Card', 'Cash', 'Bank Transfer'
      })
      .createTable('Admin', function(table) {
        table.increments('Admin_Id').primary(); // Unique identifier for each admin
        table.string('name').notNullable(); // Name of the admin
        table.string('email').notNullable().unique(); // Admin's email (unique)
        table.string('password').notNullable(); // Hashed password for authentication
        table.string('role').notNullable(); // Admin role (e.g., Super Admin, Moderator)
    })

    .createTable('Ads', function(table) {
        table.increments('id').primary();
        table.string('candidate_id').references('N_Id').inTable('Candidates').onDelete('CASCADE');
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.string('image_url');
        
    })
    .createTable('Debates', function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description');
        table.timestamp('date').notNullable();
        table.string('candidate_ids'); // This field can be adjusted based on how you plan to store multiple candidate IDs (e.g., JSON array or separate table for relationships)
       
    })
    .createTable('Faq', function(table) {
        table.increments('id').primary();
        table.text('question').notNullable();
        table.text('answer').notNullable();
     
    })
   ;
    

};

exports.down = function(knex) {
    return knex.schema
      .dropTable('payment')
      .dropTable('localList')
      .dropTable('partyList')
      .dropTable('Votes')
      .dropTable('Voters')
      .dropTable('Candidates')
      .dropTable('Lists')
      .dropTable('Circles')
      .dropTable('ElectionType')
      .dropTable('Users')
      .dropTable('Admin')
      .dropTable('LocalRequest')
      .dropTable('Ads')
      .dropTable('Debates')
      .dropTable('Ads')
      .dropTable('localList')

      ;
};
