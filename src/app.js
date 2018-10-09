var express = require('express')
var request = require('request')
var boom = require('express-boom')
var app = express()
app.use(boom())
var port = process.env.PORT || 3000
var API_URL = 'http://chiangmaibackend.yusai.asia/smartapp/APIBUSNEW/'

app.get('/', (_, res) => {
    res.send('RTC-APIs CNX')
})

app.get('/drivers', (_, res) => {
    requestOldAPIs(`${API_URL}APIThebus.php`)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.boom.badRequest(err)
        })
})

app.get('/buss', (_, res) => {
    requestOldAPIs(`${API_URL}APIbus.php`)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.boom.badRequest(err)
        })
})

app.get('/green', (_, res) => {
    requestOldAPIs(`${API_URL}kku_green.php`)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.boom.badRequest(err)
        })
})

app.get('/purple', (_, res) => {
    requestOldAPIs(`${API_URL}kku_purple.php`)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.boom.badRequest(err)
        })
})

app.get('/back', (_, res) => {
    requestOldAPIs(`${API_URL}cm_back.php`)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.boom.badRequest(err)
        })
})

app.get('/bus_stop', (_, res) => {
    requestOldAPIs(`${API_URL}APIbusstop.php`)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.boom.badRequest(err)
        })
})

app.get('/bus_line', (_, res) => {
    requestOldAPIs(`${API_URL}APIbuspastLine.php`)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.boom.badRequest(err)
        })
})

app.get('/bus_schedule', (_, res) => {
    requestOldAPIs(`${API_URL}APIschedulebus.php`)
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
                resolve(JSON.parse(body))
            } else {
                reject(error)
            }
        })
    })
}

app.listen(port)
console.log("Listening on port " + port)