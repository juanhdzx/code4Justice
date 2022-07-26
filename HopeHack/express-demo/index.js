//for joi , class is returned, joi makes it easy to validate input and send message to client 
const Joi = require('joi');

const express = require('express');
const app = express();

app.use(express.json()); // middleware, this returns middleware to use in request processing pipeline

const course = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
];


app.get('/', (req, res) => {
    res.send('Hello World!!!');  // this is how u define a route
})

//another route
// u get new routes by callling app.get()
app.get('/api/course', (req, res) => {
    res.send(course);
});


app.post('/api/course', (req, res) => {
    //define schema 
    const { error } = validateCourse(req.body);
    if (result.error) { //validate input
        // 400 bad request  
        res.status(400).send(result.error.details[0].message);
        return; 
    };


    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});





app.put('/api/course/:id', (req,res) => {
    // Look up the course, if not exisitng return 404, 
    const courseL =  course.find(c => c.id = parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found...');
    //otherwise validate, if invalid, return 404 - Bad request
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };

    // const result = Joi.validate(req.body, schema);
        const { error } = validateCourse(req.body);
    if (result.error) { //validate input
        // 400 bad request  
        res.status(400).send(result.error.details[0].message);
        return; 
    };
    // Update course, return updated course to client 
   course.name = req.body.name; 
   res.send(course) //handle http PUT request
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);

};





// how to get single course  -  
app.get('/api/course/:id', (req, res) =>{
   const courseL =  course.find(c => c.id = parseInt(req.params.id));
   if (!course) res.status(404).send('The course with the given ID was not found...');
   res.send(course);
});

//move route related to "course"^^ is seperate route

// environment var , PORT, 
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));