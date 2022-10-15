var express=require('express');
let fs = require('fs');
var user="";
fs.readFile('./controller/user.json',(err,data)=>{
    if(err) 
        throw err;
    user = JSON.parse(data);
})
console.log(user);
var route=express();
route.use(express.urlencoded({extended:true}));
route.use(express.json());
route.get('/users',(req,res)=>{
    res.render('navbar',{user:user});
});
route.get('/users/:id',(req,res)=>{
    var id = req.params.id;
    console.log(id);
    res.render('userdetails',{user:user,id:id});
}); 
module.exports=route;