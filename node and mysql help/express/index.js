const express = require('express')   // import the express dependency 
const app = express();  // instantiate an express app
const port = 5000;
app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
  app.listen(port, () => {
      console.log(`Now listening on port ${port}`);
  });