require('dotenv').config();

const express= require("express")
const https= require("https");
const bodyParser= require("body-parser")

const app= express();

app.set('view engine','ejs'); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("index");   
})

app.post('/', (req, res) => {
  const { username, password } = req.body;
  // Todo: Validate username and password
  res.send('Logged in!');
});

// Start the server
const port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on port ${port}`);
});
