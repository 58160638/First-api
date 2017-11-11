const express = require('express')
const app = express()

app.get('/greeting', (req, res) => {
    let lang = {
        en: 'Hello',
        th: 'สวัสดี'
    }

    lang['en']
    lang['th']


    let l = req.query.lang
    console.log(l)

    if (!l) {
        res.json({ message: "Hello" })
    } else {
        res.json({ message: lang[l] })
    }


})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/students', (req, res) => {
    let student = req.body
    students.push(student)
    res.json(student)
})
let student = [
    { id: '1', name: 'waroon', lastname: 'Larpsrisawad', studentid: '58160638' },
    { id: '2', name: 'Sirirut', lastname: 'Chamthaw', studentid: '58160639' }
]
app.get('/student', (req, res) => {
    res.json(student)
})
app.get('/student', (req, res) => {
    res.json(student[req.params.id - 1])
})


module.exports = app

