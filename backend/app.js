// app.js
const express = require('express');
const app = express();

// Set up routes
const teamRoutes = require('./routes/team');
const adminRoutes = require('./routes/admin');

app.use(express.json());
app.use('/team', teamRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
