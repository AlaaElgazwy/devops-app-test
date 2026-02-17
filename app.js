const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('DevOps Deployment Success 🚀');
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.listen(3000,'0.0.0.0', () => {
    console.log('Server running on port 3000');
});
