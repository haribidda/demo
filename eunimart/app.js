var express=require('express');
var app=express();

var rout=require('./controller/router');
app.use(rout);

var path=require('path');
// app.use(express.static(path.join(__dirname,"/public")));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views','views');

app.listen(3500,()=>{
     console.log("Server is running");
});