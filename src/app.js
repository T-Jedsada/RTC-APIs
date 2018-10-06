var express = require('express')
var request = require('request');
var boom = require('express-boom');
var app = express()
app.use(boom());
var port = process.env.PORT || 3000;

app.get('/', (_, res) => {
    res.send('RTC-APIs CNX')
})

app.get('/drivers', (_, res) => {
    requestOldAPIs('http://chiangmaibackend.yusai.asia/smartapp/APIBUSNEW//APIThebus.php')
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.boom.badRequest(err)
        })
})

app.get('/buss', (_, res) => {
    requestOldAPIs('http://chiangmaibackend.yusai.asia/smartapp/APIBUSNEW//APIbus.php')
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.boom.badRequest(err)
        })
})

requestOldAPIs = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, res, body) => {
            if (!error && res.statusCode == 200) {
                resolve(JSON.parse(body));
            } else {
                reject(error);
            }
        })
    })
}

app.listen(port);
console.log("Listening on port " + port);