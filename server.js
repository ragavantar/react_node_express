const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));

app.get('/api', (req, res)=>{
    res.json({ message: "Hello World"})
})