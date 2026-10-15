import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

// Users data
const user = [
    { id: 1, name: 'Rezwan Kabir', email: 'rezwan9932@gamil.com' },
    { id: 2, name: 'Md:Baigid Bostami', email: 'baigid332@gamil.com' },
    { id: 3, name: 'MD.Latiful Khabir', email: 'rezwan9@gamil.com' },
    { id: 4, name: 'Md.Munna', email: 'rezw2@gamil.com' },
    { id: 5, name: 'Badhon Mondol', email: 'badhon@22gamil.com' }
];

// GET: Get all users
app.get('/users', (req, res) => {
    res.send(user);
});

// POST: Add a new user
app.post('/users', (req, res) => {
    console.log('Data from client:', req.body);

    const { name, email } = req.body;

    // Validate data
    if (!name || !email) {
        return res.status(400).send({
            success: false,
            message: 'Name and email are required'
        });
    }

    // Create new user
    const newUser = {
        id: user.length
            ? Math.max(...user.map((u) => u.id)) + 1
            : 1,
        name,
        email
    };

    // Save user in array
    user.push(newUser);

    res.status(201).send({
        success: true,
        message: 'User added successfully',
        user: newUser
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
