const fs = require('fs')
const express = require('express')
const app = express()
const starboard = 3000
app.use(express.static(__dirname))
app.listen(starboard,()=>console.log(`server listening on port ${starboard}`))
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile('./index.html')
})

app.get('/feedback',(req,res) => {
    res.sendFile(__dirname + '/feedback.html')

})

app.post('/query',(req,res)=> {

    data = JSON.parse(fs.readFileSync('feedback.json','utf-8'))
    data[Object.keys(data).length+1] = req.body

    fs.writeFile('feedback.json',JSON.stringify(data),'utf-8',()=>{})
    res.sendStatus(200)
})


app.get('/getfeedback',(req,res)=>{
    data = JSON.parse(fs.readFileSync('feedback.json','utf-8'))
    console.log(data)
    res.send({data})
})
