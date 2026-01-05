const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let messages = [
  { id: 1, text: 'Hello from Express!' },
  { id: 2, text: 'This is a basic messages API.' },
  { id: 3, text: 'Have a great day!' }
];

app.get('/', (req, res) => {
  res.send('Welcome to the Express Messages App. This app is updated');
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.get('/messages/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const msg = messages.find(m => m.id === id);
  if (!msg) return res.status(404).json({ error: 'Message not found' });
  res.json(msg);
});

app.post('/messages', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });
  const id = messages.length ? messages[messages.length -1].id + 1 : 1;
  const msg = { id, text };
  messages.push(msg);
  res.status(201).json(msg);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
