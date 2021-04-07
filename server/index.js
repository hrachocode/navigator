const express = require("express");
const app = express();
const coordinates = require('./constants')

app.get("/getCoordinate",(req,res)=>{
    if(req.query.index){
        res.send(coordinates.slice(0,req.query.index))
    }else{
        res.send(coordinates)
    }
})

app.listen(8080,()=>{
    console.log("run");
})