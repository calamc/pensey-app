// Express server v4.16.2
// For api see https://expressjs.com/en/4x/api.html
const express = require('express');
const app = express();
const path = require('path');
const pub = path.join(__dirname, 'public');
const portAvailable = process.env.PORT || 3000;

// register middleware
app.use(express.static(pub));

app.get('*', (req,res) => {
    res.sendFile(path.join(pub, 'index.html'));
});

app.listen(portAvailable, () => {
    console.log('Server is up and running...');
});