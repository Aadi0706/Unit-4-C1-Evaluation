const express= require('express');
const app = express();

app.get("/books",logger,(req,res)=>{
    return res.send({route:req.role});
});

app.get("/libraries",logger,checkPermission,(req,res)=>{
    return res.send({route:req.role,permission:req.permission});
})

app.get("/authors",logger,checkPermission,(req,res)=>{
    return res.send({route:req.role,permission:req.permission});
})
function logger(req,res,next){
        
        if(req.path=="/books"){
            req.role="/books";
        }
        if(req.path=="/libraries"){
            req.role="/libraries";
        }
        if(req.path=="/authors"){
            req.role="/authors";
        }
        console.log(req.path);
        next();
}

function checkPermission(req,res,next)
{
      if(req.path=="/libraries"){
         req.permission="true";
      }
      if(req.path=="/authors"){
       req.permission="true";
      }
      next();
}



app.listen(5500,()=>{
    console.log("listening on port 5500");
})
