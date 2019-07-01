const path = require('path');
const getData = require('./query/getdata')
const insertIntoMenue = require('./query/insertdata')
const fs = require('fs');

const serverError = (err, response) => {
    response.writeHead(500, "Content-Type:text/html");
    response.end("<h1>Sorry, internal server error</h1>");
};

const handleHomePage = (res) => {
    const filepath = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(filepath, (err, file) => {
        if (err) return serverError(err, res);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
    });
}

const handelStatic = (endPoint, res) => {
    const filepath = path.join(__dirname, "..", endPoint);
    fs.readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        const [, extension] = endPoint.split(".");
        const extensionType = {
            html: "text/html",
            css: "text/css",
            js: "application/javascript",
            ico: "image/x-icon"
        };
        res.writeHead(200, { "content-type": extensionType[extension] });
        res.end(file);
    });
}

const handleFood = (res) => {
    getData((err, response) => {
        const converData = JSON.stringify(response);
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(converData);
    }, 1)
}
const handleDrink = (res) => {
    getData((err, response) => {
        const converData = JSON.stringify(response);
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(converData);
    }, 2)
}


const handlesuggestion = (req, res) => {
    let suggestion = '';
    req.on('data', (chunk) => {
        suggestion += chunk;
    });
    req.on('end', () => {
        console.log(suggestion)
        const { price , select , url ,nameValue } = JSON.parse(suggestion);
        insertIntoMenue(nameValue, price, select,url, (err, meal) => {
            if (err) return serverError(err, res);
            res.writeHead(302, { 'location': '/' });
            res.end();
        });
    });
}

const handelNotFound = (res) => {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>page not found</h1>');
}

module.exports = {
    handelNotFound,
    handleFood,
    handleDrink,
    handleHomePage,
    handelStatic,
    handlesuggestion
}
