var http=require("http"),host="0.0.0.0",port=9320,config;http.createServer(function(e,t){e.on("end",function(){var e="500 server error";t.writeHead(500,{"Content-Type":"text/plain","Content-Length":e.length}),t.write(e,"utf8"),t.end()})}).listen(port,host),console.log("Server running at http://"+host+":"+port+"/")