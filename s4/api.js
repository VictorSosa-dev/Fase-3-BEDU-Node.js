const express = require('express');
const router = express.Router();
const app = express();


app.use(express.json());

const port = 3000;

let notes = [
    {
        id: 1,
        title: 'Note 1',
        content: 'HTML is easy'
    }
];

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.post('/notes', (req, res) => {
    const note = req.body;
    notes.map(n => {
        if (n.id === note.id) {
            res.status(400).json({ error: 'note id must be unique' });
        }
    });
    notes.push(note);
    res.status(201).json(note);
});

app.patch('/notes', (req, res) => {
   notes[req.body.id-1] = req.body;
   res.status(200).json(req.body);
});

app.delete('/notes', (req, res) => {
    notes = notes.filter(n => n.id !== req.body.id);
    res.status(204).json('Note deleted');
});

app.get('/', (req, res) => {
    res.send('<h1>Mi Api</h1>');

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
