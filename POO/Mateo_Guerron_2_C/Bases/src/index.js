const express=require("express")
const app = express()

app.get("/blog", function(req,res){
    return res.json({Mnesaje:"FGJKDJD"})
})


app.listen(3000, function(){

    console.log("mi servidor ");

})