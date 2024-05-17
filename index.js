const express= require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const router= require('./Routes/router');
          
const Port= process.env.PORT || 4005;

const staticpath=path.join(__dirname,'./public');
app.use(express.static(staticpath));
app.use(router);      /* 3 we need to register our router */

const views=path.join(__dirname,'./template/views');
const partialsPath=path.join(__dirname,'./template/partials');

//to set the view engine
app.set('view engine','hbs');
app.set('views',views);
hbs.registerPartials(partialsPath)

app.listen(Port,()=>{
    console.log(`Running port is ${Port}`)
});