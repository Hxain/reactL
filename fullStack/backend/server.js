import express from 'express';

const app = express();

// compile ur vite app with vite build and use the dist folder to serve the app in backend

//app.use(express.static('dist'));



// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

app.get('/api/users', (req, res) => {
    let users = [
        {
            id : 1,
            gmail: 'user1@gmail.com',
            password: '123456',

        },
        {
            id : 2,
            gmail: 'user2@gmail.com',
            password: '1234567',
        }
        ];
        res.send(users);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});