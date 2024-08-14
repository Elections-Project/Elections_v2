const knex = require('knex')(require('../knexfile').development);


exports.createList = async (req, res) => {
    console.log(req.body)
    const { name, logo, candidates, circle } = req.body;

    try {
        await knex('Lists').insert({ name, logo, candidates, circle });
        res.status(201).json({ message: 'تمت إضافة القائمة بنجاح!' });
    } catch (error) {
        res.status(500).json({ error: 'حدث خطأ أثناء إضافة القائمة.' });
    }
};
// في هذا السطر، تم إنشاء اتصال بـ knex باستخدام إعدادات التطوير

// دالة لإضافة قائمة جديدة
exports.createList = async (req, res) => {
    console.log(req.body);
    const { name, logo, candidates, circle } = req.body;

    try {
        await knex('Lists').insert({ name, logo, candidates, circle });
        res.status(201).json({ message: 'تمت إضافة القائمة بنجاح!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'حدث خطأ أثناء إضافة القائمة.' });
    }
};

// دالة لجلب جميع القوائم
exports.getLists = async (req, res) => {
    try {
        const lists = await knex('Lists').select('*');
        res.status(200).json(lists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'حدث خطأ أثناء جلب القوائم.' });
    }
};

exports.updateList = async (req, res) => {
    const { id } = req.params; // الحصول على id القائمة من الـ params
    const { name, logo, candidates, circle } = req.body; // الحصول على البيانات الجديدة من الـ body

    try {
        // تحديث البيانات بناءً على id
        await knex('Lists').where('list_id', id).update({ name, logo, candidates, circle });
        res.status(200).json({ message: 'تم تحديث القائمة بنجاح!' });
    } catch (error) {
        res.status(500).json({ error: 'حدث خطأ أثناء تحديث القائمة.' });
    }
};