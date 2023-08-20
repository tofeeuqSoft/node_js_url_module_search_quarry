let  http = require("http");
let  url = require("url");

let server=http.createServer(function (req, res){

  let  myUrl="https://github.com/tofeeuqSoft?tab=repositories";

let myUrlObj= url.parse(myUrl,true);


let mySearchName = myUrlObj.search;

res.writeHead(200,{'Contaent-Type': 'text/html'});
    res.write(mySearchName);
    res.end();

});

server.listen(5050);
console.log("server success");