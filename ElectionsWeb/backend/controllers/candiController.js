

const knex = require('../config/db');

exports.createCandidate = async (req, res) => {
    const { N_Id, ListId } = req.body;

    // التحقق من وجود البيانات المطلوبة
    if (!N_Id || !ListId) {
        return res.status(400).json({ error: 'مفقود بيانات: N_Id و ListId مطلوبين' });
    }

    const trx = await knex.transaction();
    try {
        // إدخال بيانات المرشح وربطه بالقائمة داخل معاملة
        await trx('Candidates').insert({ 
            N_Id: N_Id, 
            ListId: ListId 
        });

        // تأكيد المعاملة إذا نجح الإدخال
        await trx.commit();
        res.status(201).json({ message: 'تمت إضافة المرشح وربطه بالقائمة بنجاح!' });
    } catch (error) {
        // التراجع عن المعاملة في حالة حدوث خطأ
        await trx.rollback();
        console.error('خطأ أثناء إضافة المرشح:', error); // طباعة تفاصيل الخطأ
        res.status(500).json({ error: `حدث خطأ أثناء إضافة المرشح: ${error.message}` });
    }
};
