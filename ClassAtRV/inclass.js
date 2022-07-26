// currently there are no enpoints
// doing the express import 
 //const app = require('express')();



 // json version
const express = require('express');
const app = express();
app.use(express.json);


// // creates a variable that we will use to determine what port 
// // our server will run on
 const port = 8080;

 app.listen(port, () => console.log(`Yo, I am listening on port ${port}`)
 ); 

app.get('/profile', (req, res) => {
    res.status(2000).send({
        day: 'Tuesday',
        person: 'Juan',
    })
});
// dynamic url is ID
app.post('/contact/:id',(req, res) =>{
    const {naruto} = req.params;
    const {image} = req.body;
    
    if(!image) {
        res.status(418).send({message: "where is the image?"})
    }
    
});
 res.send({
     test: 'test'
 })
    // res.status(200).send({
    //     day: 'Tuesday',
    //     person: 'Juan'
    // })
