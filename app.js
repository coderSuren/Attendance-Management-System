require('dotenv').config();

const express= require("express")
const https= require("https");
const bodyParser= require("body-parser")

const app= express();

var db = require('./public/js/database.js')

app.set('view engine','ejs'); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("index");   
})

app.post('/', (req, res) => {
  console.log(req.body);
  login_result = db.query_login(req.body.username, req.body.password, function(status) {
    if (status) {
      res.send("Logged In!");
    }
    else {
      res.send("Failed to log in!");
    }
  }).finally;
});

// Start the server
const port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on port ${port}`);
});
