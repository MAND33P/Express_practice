const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000


app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
//   res.sendFile("index.html")  ** It is used for sending local files 
// below one is used to send the main files no matter where it is hosted
//   directory name to get in ............
    res.sendFile(__dirname +"/index.html")
})

app.post('/', (req, res)=>{
    // name1 and name2 are ddifned in index.html
    var num1= Number(req.body.name1); 
    var num2= Number(req.body.name2);
    var result= num1+num2;

    res.send("Result of the numbers is:: " + result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})