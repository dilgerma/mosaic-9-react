const http = require('http'),
    url = require('url'),
    fs = require('fs');

const server = http.createServer((res, resp) => {

    const pathName = url.parse(res.url).pathname
    const jsHeader = { 'Content-Type': 'application/javascript' }

    switch (pathName) {
        case '/bundle.js':
            resp.writeHead(200, jsHeader)
            return fs.createReadStream('dist/js/app.js').pipe(resp)
        case '/chunk-vendors.js':
            resp.writeHead(200, jsHeader)
            return fs.createReadStream('dist/js/chunk-vendors.js').pipe(resp)
        default:
            resp.writeHead(200, { 
                'Content-Type': 'text/html',
                'Link': '<http://localhost:9093/bundle.js>; rel="fragment-script", <http://localhost:9093/chunk-vendors.js>; rel="fragment-script"'
            })
            return resp.end('')
    }

})


server.listen(process.env.PORT || 3000,()=>{
    console.log("Server listening on Port " + process.env.PORT || 3000)
})
