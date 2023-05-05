require('dotenv').config();

const express= require("express")
const https= require("https");
const bodyParser= require("body-parser")

const app= express();

var db = require('./public/js/database.js')
var setTimeout=require("node:timers/promises");

app.set('view engine','ejs'); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(function(req, res, next) { 
  res.header('Cache-Control', 'no-cache, private, no-store');
   next();
 });


// GET Routes
app.get("/",function(req,res){
    res.render("index");  
})


app.get("/login",function(req,res){
  res.render("login", {display:"None", errorMessage: ""});
})

app.get("/home",function(req,res){
  res.render("home");  
})

// POST Routes

app.post('/login', (req, res) => {
  console.log(req.body);
  login_result = db.query_login(req.body.username, req.body.password, function(status) {
    if (status) {
      console.log("Logged In!");
      res.redirect("/home");   
    }
    else {
      console.log("Failed to log in!");
      res.render("login", {display:"block", errorMessage: "Incorrect Password"}); 
    }
  });
});

// Start the server
const port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on port ${port}`);
});
