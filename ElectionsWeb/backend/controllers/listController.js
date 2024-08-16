// const knex = require('../config/db');
// // const express = require('express');

// // const app = express();

// // app.use(express.json());
// // controllers/listController.js


// // // controllers/listController.js


// exports.createList = async (req, res) => {
//     const { name, logo, list } = req.body; // أضف أي حقول إضافية تحتاجها بناءً على تعريف الجدول

//     // تحقق من الحقول المطلوبة
//     if (!name || !logo || !list) { // تأكد من أن جميع الحقول المطلوبة موجودة
//         return res.status(400).json({ error: 'مفقود بيانات: name و logo و list مطلوبين' });
//     }

//     try {
//         // إدخال البيانات في الجدول 'Lists'
//         await knex('Lists').insert({ name, logo, list });
//         res.status(201).json({ message: 'تمت إضافة القائمة بنجاح!' });
//     } catch (error) {
//         console.error('خطأ أثناء إضافة القائمة:', error);
//         res.status(500).json({ error: 'حدث خطأ أثناء إضافة القائمة.' });
//     }
// };

// exports.getLists = async (req, res) => {
//     try {
//         const lists = await knex('Lists').select('*');
//         res.status(200).json(lists);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'حدث خطأ أثناء جلب القوائم.' });
//     }
// };

// // exports.updateList = async (req, res) => {
// //     const name = req.body;
// //     const logo = req.body;
    

// //     try {
// //         await knex('Lists').where('list_id', id).update({ name, logo });
// //         res.status(200).json({ message: 'تم تحديث القائمة بنجاح!' });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'حدث خطأ أثناء تحديث القائمة.' });
// //     }
// // };




// // controllers/listController.js
// // controllers/listController.js


// exports.updateList = async (req, res) => {
//     const { list_id, name, logo } = req.body;

//     // List of missing fields
//     const missingFields = [];

//     // Check for missing fields
//     if (!list_id) missingFields.push('list_id');
//     if (!name) missingFields.push('name');
//     if (!logo) missingFields.push('logo');

//     // If there are missing fields, return an error response
//     if (missingFields.length > 0) {
//         return res.status(400).json({ error: `Missing fields: ${missingFields.join(', ')}` });
//     }

//     try {
//         // Update the record in the 'Lists' table
//         const result = await knex('Lists')
//             .where('list_id', list_id)
//             .update({ name, logo });

//         // Log the result for debugging
//         console.log('Update result:', result);

//         // Check if the record was updated
//         if (result) {
//             res.status(200).json({ message: 'List updated successfully!' });
//         } else {
//             res.status(404).json({ error: 'List not found' });
//         }
//     } catch (error) {
//         console.error('Error details:', error);
//         res.status(500).json({ error: 'An error occurred while updating the list.', details: error.message });
//     }
// };
// // controllers/listController.js


// exports.deleteList = async (req, res) => {
//     console.log(req.body)
//     const { list_id } = req.body;

//     if (!list_id) {
//         return res.status(400).json({ error: 'مفقود بيانات: list_id مطلوب' });
//     }

//     try {
//         // حذف السجل من جدول 'Lists'
//         const result = await knex('Lists')
//             .where('list_id', list_id)
//             .del(); // استخدم del() لحذف السجل

//         if (result) {
//             res.status(200).json({ message: 'تم حذف القائمة بنجاح!' });
//         } else {
//             res.status(404).json({ error: 'القائمة غير موجودة' });
//         }
//     } catch (error) {
//         console.error('خطأ أثناء حذف القائمة:', error);
//         res.status(500).json({ error: 'حدث خطأ أثناء حذف القائمة.' });
//     }
// };




const knex = require('../config/db');

exports.createList = async (req, res) => {
    const { name, logo, list } = req.body;

    if (!name || !logo || !list) {
        return res.status(400).json({ error: 'مفقود بيانات: name و logo و list مطلوبين' });
    }

    try {
        await knex('Lists').insert({ name, logo, list });
        res.status(201).json({ message: 'تمت إضافة القائمة بنجاح!' });
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
