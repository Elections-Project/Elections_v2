

exports.up = function(knex) {
  return knex.schema

  .createTable('Circles', function(table) {
    table.increments('circle_id').primary();
    table.string('name').notNullable();
    table.string('city').notNullable();
    table.integer('numOfCandidat').defaultTo(0);
    table.integer('count').defaultTo(0);
  })
    .createTable('Users', function(table) {
      table.integer('N_Id').primary(); // تغيير الحقل إلى نوع integer
      table.string('name');
      table.string('email').unique();
      table.enum('gender', ['Male', 'Female', 'Other']);
      table.integer('age');
      table.string('city');
      table.string('religion');
      table.string('polling_address');
      table.boolean('isOrganizer').defaultTo(false);
      table.string('password');
      table.string('otp'); 
      table.string('token');
      table.integer('circle_id').unsigned().references('circle_id').inTable('Circles').onDelete('SET NULL');
    })
    .createTable('ElectionType', function(table) {
      table.increments('id').primary();
      table.string('Election_type').notNullable(); // e.g., 'Party' or 'Local'
    })
   
    .createTable('Lists', function(table) {
      table.increments('list_id').primary();
      table.string('name').notNullable();
      table.string('list').notNullable();
      table.string('logo');
      table.integer('candidate').unsigned().references('N_Id').inTable('Users').onDelete('CASCADE');
    })
    .createTable('Candidates', function(table) {
      table.integer('N_Id').unsigned().references('N_Id').inTable('Users').onDelete('CASCADE');
      table.integer('Election_id').unsigned().references('id').inTable('ElectionType').onDelete('CASCADE');
      table.integer('Circle').unsigned().references('circle_id').inTable('Circles').onDelete('CASCADE');
      table.integer('LostId').unsigned().references('list_id').inTable('Lists').onDelete('CASCADE');
      table.primary(['N_Id', 'Election_id']);
      // Adding a unique constraint to N_Id
      table.unique('N_Id');
    })
    .createTable('Voters', function(table) {
      table.integer('N_Id').unsigned().references('N_Id').inTable('Users').onDelete('CASCADE');
      table.primary('N_Id');
    })
    .createTable('Votes', function(table) {
      table.increments('Id').primary();
      table.integer('candidate_id').unsigned().references('N_Id').inTable('Candidates').onDelete('CASCADE');
      table.integer('voter_id').unsigned().references('N_Id').inTable('Voters').onDelete('CASCADE');
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
    .createTable('localList', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('count').defaultTo(0);
      table
        .integer('circle_id')
        .unsigned()
        .references('circle_id')
        .inTable('Circles')
        .onDelete('CASCADE')
        .notNullable(); // Relate to Circles table
    })
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
    table.increments('id').primary(); // رقم الطلب (إنشاء تلقائي)
    table.boolean('request_type').notNullable(); // نوع الطلب (true/false)
    table.boolean('acceptable').notNullable().defaultTo(false); // مقبول او لا
    table.string('title'); // العنوان (غير إجباري)
    table.string('image_url'); // رابط الصورة (غير إجباري)
    table.text('description').notNullable(); // الوصف (إجباري)
    table.integer('ad_plan'); // خطة الإعلان (عدد الثواني - غير إجباري)
    table.string('candidate_one_id'); // الرقم الوطني للمرشح الأول (غير إجباري)
    table.string('candidate_two_id'); // الرقم الوطني للمرشح الثاني (غير إجباري)
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
  .createTable("partyrequest", function (table) {
      table.increments("id").primary(); // عمود ID تلقائي التزايد ورقم تسلسلي
      table.string("name", 255).notNullable(); // اسم الحزب أو القائمة
      table.string("email", 255).notNullable(); // البريد الإلكتروني للممثل
      table.string("phone", 20); // رقم الهاتف للممثل
      table.string("list_name", 255); // اسم القائمة
      table.string("delegate_name", 255); // اسم الممثل
      table.string("delegate_phone", 20); // رقم هاتف الممثل
      table.string("delegate_email", 255); // بريد إلكتروني للممثل
      table.string("status", 255).defaultTo("pending"); // حالة الطلب (افتراضيًا 'معلق')
      table.text("reason"); // سبب الموافقة أو الرفض
      table.timestamp("created_at").defaultTo(knex.fn.now()); // تاريخ الإنشاء
      table.timestamp("updated_at").defaultTo(knex.fn.now()); // تاريخ آخر تحديث
  })
  .createTable('LocalCandidatesRequest', function(table) {
      table.bigIncrements('National_ID').primary(); // Primary Key with BIGINT and auto-increment
      table.string('Name', 255).notNullable(); // اسم المرشح
      table.string('List_Name', 255).notNullable(); // اسم القائمة
      table.string('Email', 255).notNullable(); // البريد الإلكتروني
      table.integer('Circle_ID').unsigned().notNullable(); // ID الدائرة
      table.string('Gender', 255).notNullable(); // الجنس
      table.date('Birth_Date').notNullable(); // تاريخ الميلاد
      table.string('Type_Of_Chair', 255).notNullable(); // نوع الكرسي
      table.string('Religion', 255).notNullable(); // الدين
      table.string('Status', 255).notNullable(); // حالة الطلب
  })
  .createTable('ChatMessages', function(table) {
      table.increments('M_Id').primary(); // Primary Key
      table.integer('CN_Id').unsigned().notNullable(); // Foreign Key
      table.text('Message').notNullable(); // Message Content
      table.boolean('admin').notNullable(); // Boolean to check if the message is from admin
      table.boolean('Deleted').notNullable(); // Boolean to check if the message is from Deleted
      table.timestamp('timestamp').defaultTo(knex.fn.now()); // Timestamp of the message

      // Foreign Key Reference to Users table's N_Id column
      table.foreign('CN_Id').references('N_Id').inTable('Users').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
return (
  knex.schema
    // Drop tables in reverse order of creation, starting with those with foreign key dependencies
    .dropTableIfExists("ChatMessages")
    .dropTableIfExists("Ads")
    .dropTableIfExists("Debates")
    .dropTableIfExists("Faq")
    .dropTableIfExists("partyrequest")
    .dropTableIfExists("LocalCandidatesRequest")
    .dropTableIfExists("payment")
    .dropTableIfExists("Votes")
    .dropTableIfExists("Voters")
    .dropTableIfExists("Candidates") // Drop Candidates before Lists
    .dropTableIfExists("Lists") // Drop Lists before Circles
    .dropTableIfExists("partyList")
    .dropTableIfExists("ElectionType")
    .dropTableIfExists("Admin")
    .dropTableIfExists("Users")
    .dropTableIfExists("localList") // Drop localList before Circles
    .dropTableIfExists("Circles") // Finally, drop Circles
);
};