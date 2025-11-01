import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000;  
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Fakestore API is backend server is running."});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});