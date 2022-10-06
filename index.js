const express = require('express') // IMPORT express
const app = express() // create an instance of the import.
const port = 3000 // variable to store the port to listen on
const router = express.Router()

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html')) // IF you get a GET on '/' send 'Hello World' as a response'

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // make app listen on the port.

//note, unlike POST, parameters are visible to a user in browser address bar in GET request.
router.get('/add/:firstNumber/and/:secondNumber', (req,res)=>{
    console.log(req.params.firstNumber + req.params.secondNumber);
    //Checkout console to see why parseInt is essential in this case.
    let firstNo = parseInt(req.params.firstNumber),
        secondNo = parseInt(req.params.secondNumber);
    res.json({"Addition" : firstNo + secondNo});
  });