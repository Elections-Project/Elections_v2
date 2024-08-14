// db.js
const knex = require('knex');
const knexfile = require('../knexfile');
const db = knex(knexfile.development);

// وظيفة للتحقق من الاتصال بقاعدة البيانات
const testConnection = async () => {
    try {
        await db.raw('SELECT 1');
        console.log('تم الاتصال بقاعدة البيانات بنجاح!');
    } catch (error) {
        console.error('فشل الاتصال بقاعدة البيانات:', error);
    }
};

// استدعاء اختبار الاتصال
testConnection();

module.exports = db;
