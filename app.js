var express =require ('express');
var path = require('path');
const port = process.env.PORT || 3000;

var app=express();
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
    res.render("index");

})
app.listen(port, () => {
    console.log(`server is starting at ${port}`);
});