const express = require('express')

const app = express();

console.log("Starting application....")

app.get ('/', (req, res)=>{

res.send("Hello world")

})

app.listen(80)