const express=require('express');
const path=require('path');

var app=express();
var port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello  ...");
});


app.listen(port,()=>{
    console.log(`Server started on ${port}`);

});