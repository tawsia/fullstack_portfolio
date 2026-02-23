const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Allow frontend (React on port 3000) to call this API
app.use(cors({
  origin:"https://fullstackportfolio-ten.vercel.app"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
// All API routes start with /api (e.g. GET /api/items)
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
