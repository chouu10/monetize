var express=require('express');
var app=express();

app.use(express.static(__dirname, 'public' ));
app.get("/values",function(req,res){
console.log("I received a get request")

 var values=[
[65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
];
res.json(values);

});

app.get("/values1",function(req,res){
console.log("I received a get request")

 var values=[[400, 450, 600, 810, 1050, 1320, 1400],
      [280, 480, 400, 550, 1100, 1230, 1500]
];
res.json(values);

});


app.get("/values2",function(req,res){
console.log("I received a get request")

 var values=[
3824,5241,2350
];
res.json(values);

});


app.listen(8081);
console.log('server running on port 8081');
