const http = require('http')
const { readFileSync} = require('fs')

const htmlpage = readFileSync('./navbar-app/index.html')
const csspage = readFileSync('./navbar-app/styles.css')
const logopage = readFileSync('./navbar-app/logo.svg')
const jsppage = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    
    const url = req.url
    if(url === '/') {
        res.writeHead(200, { 'content-type': 'text/html'})
        res.write(htmlpage)
        res.end()
    }

    else if(url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css'})
        res.write(csspage)
        res.end()
    }

    else if(url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml'})
        res.write(logopage)
        res.end()
    }

    else if(url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript'})
        res.write(jsppage)
        res.end()
    }

    else {
        res.writeHead(404, { 'content-type': 'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})

server.listen(5000)