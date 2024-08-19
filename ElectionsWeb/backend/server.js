const express = require('express');
const db = require('./config/db'); // استيراد الاتصال بقاعدة البيانات
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// استيراد الموجهات
const userRoutes = require('./routes/userRoutes');
const partyRoutes = require('./routes/partyRoutes');
const listRoutes = require('./routes/listRoutes');
const ChatRoutes = require('./routes/ChatRoutes');
const AdsRoutes = require('./routes/AdsRoutes');
const candiRoutes = require('./routes/candiRoutes');
const registerRouter = require('./routes/register_router');

// تثبيت الموجهات
app.use('/api', ChatRoutes);
app.use('/api', userRoutes);
app.use('/api', partyRoutes);
app.use('/api', listRoutes);
app.use('/api', candiRoutes);
app.use('/api', AdsRoutes);


app.use('/db/vs', registerRouter);

// بدء تشغيل الخادم
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
