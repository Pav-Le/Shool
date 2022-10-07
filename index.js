const express = require('express')

const app = express();

console.log("Starting application....")

app.get ('/', (req, res)=>{

res.send("Hello World to test the changes")

})

app.listen(80)