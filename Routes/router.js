const express=require('express');
const router= new express.Router();

// template engine root
router.get('',(req,res)=>{
    res.render('index')
});
router.get('/about',(req,res)=>{
    // console.log(req.query)
    res.render('about',{
        name:req.query.name
    })
});
router.get('/contact',(req,res)=>{
    res.render('contact')
});
router.get('/guard',(req,res)=>{
    res.render('guard')
});
router.get('/service',(req,res)=>{
    res.render('service')
});
router.get('/login',(req,res)=>{
    res.render('login',{})
});
router.get('*',(req,res)=>{
    res.render('404')
});

module.exports=router;