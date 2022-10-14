const express = require('express');
const app = express();
const PORT = 3005;


app.get('/', (req, res)=>{
  return res.status(200).json({
    status:true,
    message: 'ini percobaan deploy ke platform VERCEL'
  });
});

app.use((req, res) => {
  return res.status(400).json({
    status: false,
    message: 'apa anda tersesat'
  })
});

app.listen(PORT, ()=>{
  console.log(`connected to port ${PORT}`)
})