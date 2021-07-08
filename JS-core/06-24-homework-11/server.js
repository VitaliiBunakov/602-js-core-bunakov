let http =  require("http");
let {task1,task2}  = require('./personalmodule');
let url = require('url');



http.createServer((req, resp)=>{
    resp.writeHead(200,{'Content-Type': 'text/html'});
    // resp.write(task1()) //task 1
    resp.write(task2())




    resp.end();

}).listen(5000)
