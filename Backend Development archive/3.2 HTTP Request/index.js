import express from 'express';
const app = express();
const PORT = 3000;


app.get('/', (req, res)=>{
    res.send('<h1>Hello, World!<h1>');
});
app.post('/register', (req, res)=>{
    res.sendStatus(200);
});

app.get('/about', (req, res)=>{
    res.send('<h1>About Us<h1><p>This is the about page.</p>');  
});

app.get('/contact', (req, res)=>{
  res.send('<h1>Contact Us<h1><p>This is the contact page.</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 