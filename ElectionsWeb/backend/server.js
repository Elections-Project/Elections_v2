
// const express = require('express');
// require('dotenv').config();
// const db = require('./config/db'); // استيراد الاتصال بقاعدة البيانات

// const app = express();
// app.use(express.json());

// const listRoutes = require('./routes/listRoutes');
// app.use('/api', listRoutes);



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const db = require('./config/db'); // استيراد الاتصال بقاعدة البيانات
require('dotenv').config();
const cors = require('cors');
const listController = require('./controllers/listController'); // تأكد من أنك قد أنشأت هذا الملف
const listRoutes = require('./routes/listRoutes');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Chat Routes
const ChatRoutes = require('./routes/ChatRoutes');
app.use('/api', ChatRoutes);

// Routes
// app.use('/api', listRoutes);
app.post('/api/lists', listController.createList);
app.get('/api/lists', listController.getLists);
app.put('/api/lists', listController.updateList);
app.delete('/api/lists', listController.deleteList);



// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
