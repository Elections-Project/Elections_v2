const knex = require('../config/db');

// exports.createList = async (req, res) => {
//     const { name, logo, list } = req.body;

//     if (!name || !logo || !list) {
//         return res.status(400).json({ error: 'مفقود بيانات: name و logo و list مطلوبين' });
//     }

//     try {
//         await knex('Lists').insert({ name, logo, list });
//         res.status(201).json({ message: 'تمت إضافة القائمة بنجاح!' });
//     } catch (error) {
//         console.error('خطأ أثناء إضافة القائمة:', error);
//         res.status(500).json({ error: 'حدث خطأ أثناء إضافة القائمة.' });
//     }
// };
exports.createList = async (req, res) => {
    const { name, org, circle, logo, file_path } = req.body;

    if (!name || !org || !logo || !circle || !file_path) {
        return res.status(400).json({ error: 'مفقود بيانات: name و org و logo و circle و file_path مطلوبين' });
    }

    try {
        const [list_id] = await knex('Lists').insert({ name, org, circle, logo, file_path }).returning('list_id');
        res.status(201).json({ message: 'تمت إضافة القائمة بنجاح!', list_id });
    } catch (error) {
        console.error('خطأ أثناء إضافة القائمة:', error);
        res.status(500).json({ error: 'حدث خطأ أثناء إضافة القائمة.' });
    }
};


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
    const { list_id, name, logo } = req.body;

    const missingFields = [];
    if (!list_id) missingFields.push('list_id');
    if (!name) missingFields.push('name');
    if (!logo) missingFields.push('logo');

    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing fields: ${missingFields.join(', ')}` });
    }

    try {
        const result = await knex('Lists').where('list_id', list_id).update({ name, logo });
        if (result) {
            res.status(200).json({ message: 'List updated successfully!' });
        } else {
            res.status(404).json({ error: 'List not found' });
        }
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: 'An error occurred while updating the list.', details: error.message });
    }
};

exports.deleteList = async (req, res) => {
    const { list_id } = req.body;

    if (!list_id) {
        return res.status(400).json({ error: 'مفقود بيانات: list_id مطلوب' });
    }

    try {
        const result = await knex('Lists').where('list_id', list_id).del();
        if (result) {
            res.status(200).json({ message: 'تم حذف القائمة بنجاح!' });
        } else {
            res.status(404).json({ error: 'القائمة غير موجودة' });
        }
    } catch (error) {
        console.error('خطأ أثناء حذف القائمة:', error);
        res.status(500).json({ error: 'حدث خطأ أثناء حذف القائمة.' });
    }
};
