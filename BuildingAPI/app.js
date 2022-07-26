const http = requre('http');

const server = http.createServer((req, res) => {  // checks url of the incoming request, define various routes of the request 

    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }    
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');