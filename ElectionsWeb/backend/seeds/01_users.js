exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {
          N_Id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          gender: 'Male',
          age: 30,
          city: 'Amman',
          religion: 'Islam',
          polling_address: 'Amman Central',
          isOrganizer: true,
          password: 'hashed_password', // تأكد من استخدام كلمة مرور مشفرة إذا كان ذلك مطلوبًا
          otp: '123456',
          token: 'sample_token',
          circle_id: 1 // تأكد من أن هذا المعرف موجود في جدول Circles
        },
        {
          N_Id: 2,
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          gender: 'Female',
          age: 28,
          city: 'Zarqa',
          religion: 'Christianity',
          polling_address: 'Zarqa East',
          isOrganizer: false,
          password: 'hashed_password', // تأكد من استخدام كلمة مرور مشفرة إذا كان ذلك مطلوبًا
          otp: '654321',
          token: 'sample_token_2',
          circle_id: 2 // تأكد من أن هذا المعرف موجود في جدول Circles
        },
        {
          N_Id: 3,
          name: 'Jdddne Smith',
          email: 'jaddne.smith@example.com',
          gender: 'Female',
          age: 28,
          city: 'Zadrqa',
          religion: 'Chrdistianity',
          polling_address: 'Zardqa East',
          isOrganizer: false,
          password: 'hadshed_password', // تأكد من استخدام كلمة مرور مشفرة إذا كان ذلك مطلوبًا
          otp: '654d321',
          token: 'sampdle_token_2',
          circle_id: 2 // تأكد من أن هذا المعرف موجود في جدول Circles
        }
        // أضف المزيد من السجلات حسب الحاجة
      ]);
    });
};
