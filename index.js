const express = require('express');
const qrcode = require('qrcode');
const path = require('path')
const ejs = require('ejs')

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.set('views',path.join(__dirname , 'view'));

// get method and  listen method do for hw
app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/scan',(req,res)=>{
    const input_text = req.body.text;
    qrcode.toDataURL(input_text,(err,src)=>{
        res.render('scan',{
            qr_code:src
        })
    })
    
})

app.listen(3000 , console.log(`Listening to PORT 3000`))


