
const express = require('express');
require('dotenv').config();
const db = require('./config/db'); // استيراد الاتصال بقاعدة البيانات

const app = express();
const listRoutes = require('./routes/listRoutes');
app.use('/api', listRoutes);

app.use(express.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

