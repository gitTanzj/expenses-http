import express from 'express'
import fs from 'fs'

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    console.log(req.method, req.url)
    next()
})

app.get('/expenses', async (req, res) => {
    fs.readFile('./data/expenses.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send('Error')
        }
        res.send(JSON.parse(data))
    })
})

app.listen(3005, () => {
    console.log('Server on port 3005')
})