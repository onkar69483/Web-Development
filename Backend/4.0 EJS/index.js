import express from 'express'

const app = express()
const port = 3000
app.set('view engine', 'ejs')
var day = ''
var message = ''

function setDay(req, res, next) {
    const date = new Date()
    day = date.getDay()
    console.log(day);
    if(day>=1 && day<=5){
        message = "weekday, it's time to work hard!"
    }else {
        message = "weekend, it's time to have fun!"
    }
    next()
}

app.use(setDay)

app.get('/', (req, res)=>{
    res.render('index.ejs', {message})
})

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
})