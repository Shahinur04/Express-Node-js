const express =require('express');
const app = express();
const port = 5000;
const phones=('./phones.json');

app.get('/',(req,res)=>{
res.send('I love ALLAH SUBHANUTAYALA')
});

app.get('/phones',(req,res)=>{
res.send(phones);
});
app.listen(port,()=>{
    console.log(`example app listen on port;${port}`)
})
