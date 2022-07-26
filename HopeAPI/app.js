
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Friends = require('./index'); //name of file the variable is from

const app = express();

//middleware
app.use(bodyParser.json());


// connect database 
mongoose.connect('mongodb+srv://root:Password@hopefirst.g8olv.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser : true }, () => {
    console.log('DB Connection Success!')
})


// routes
app.get('/', (req, res) => { //method, specify method
    res.send('List of COVID-19 Testing sites...') //Logic, what makes the GET method work
});

app.get('/sites', (req, res) => {
    res.send('Locations..')
});


app.post('/test', (req, res) => {
   res.send('Branch phone number...');
   console.log(req.body);
   
    // const post = new Friends({
    // name: req.body.name,
    //     age: req.body.age
    // });

    // post.save()
    // .exec()
    // .then(data => {
    //     res.json(data);
    // })
    // console.log(post);
})




app.listen(3000)
console.log('listening on port 3000');
