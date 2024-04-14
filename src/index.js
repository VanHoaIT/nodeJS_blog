const path = require('path')
const express = require('express') //
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

//cấu hình thêm static file
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//http logger 
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
  extname: '.hbs' //đổi đuôi file handlebars thành .hbs
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));

// định nghĩa
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req.body)
  res.send();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


