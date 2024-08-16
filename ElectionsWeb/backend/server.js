
const express = require('express');
require('dotenv').config();
const db = require('./config/db'); // استيراد الاتصال بقاعدة البيانات
const cors = require('cors');

const app = express();
const listRoutes = require('./routes/listRoutes');
app.use('/api', listRoutes);
app.use(cors());
app.use(express.json());

// Chat Routes
const ChatRoutes = require('./routes/ChatRoutes');
app.use('/api', ChatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

