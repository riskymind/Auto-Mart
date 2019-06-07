import express from 'express';
import path from 'path';

const app = express();

const port = 3000;

app.use(express.static('UI'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'UI/index.html'));
});

app.get('/userpage', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'UI/userpage.html'));
});

app.get('/order', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'UI/order.html'));
});

app.get('/image', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'UI/image.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'UI/admin.html'));
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});