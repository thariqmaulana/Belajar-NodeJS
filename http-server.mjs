import http from "http";

const server = http.createServer( (request, response) => {
    console.info(request.method);
    console.info(request.url);

    response.write("Halo dari HTTP Server");
    response.end();
} )

server.listen(3000)