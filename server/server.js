const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');
const cors=require("cors"); 
const corsOptions ={ origin:'*', methods: ['GET', 'PUT', 'POST', 'PATCH']}

app.use(cors(corsOptions)); 
app.use(express.urlencoded({extended: true})); 
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/TimeSpentGraph');

const TimeSpent = mongoose.model('TimeSpent', { name: String, timeSpent: Number });

app.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var data=null;
    data = await TimeSpent.find();
    res.send(data);
})

app.patch('/', (req, res)=>{
    console.log("patch req");
    TimeSpent.updateOne({name: req.body.name}, {$set: req.body}, (err)=>{
      if(err){
        console.log(err);
      }else{
        res.send("Successfully updated time spent")
      }
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})