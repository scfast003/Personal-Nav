import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});