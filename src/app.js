const express = require('express')
const hbs = require('hbs')
const path =  require('path')
const app = express()
const port = process.env.port || 8000;


const staticPath = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../views");

app.use(express.static(staticPath));
app.set("views", viewsPath);
app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("index")
})

app.listen(port, ()=>{
    console.log("aa m hu 8000")
})