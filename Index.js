const { log } = require('console')
const express = require('express')
const path = require('path')
const app = express()
const port = 5000

// setup to call hbs
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

// set static file server
app.use(express.static('src/assets'))

// parsing data from client
app.use(express.urlencoded({ extended: false }))

// routing
app.get('/', home)
app.get('/testing-bootstrap', bootstrap)
app.get('/blog', blog)
app.get('/blog-detail/:id', blogdDetail)
app.get('/addblog', formblog)
app.post('/addblog', addblog)


// local server
app.listen(port, () => {
  console.log("testing")
}) 

function home(req, res) {
  res.render('index')
}

function bootstrap(req, res) {
  res.render('testing-bootstrap')
}

function blog(req, res) {
  res.render('blog')
}

function formblog(req, res) {
  res.render('blog')
} 

function addblog(req, res) {
  const data = req.body
  console.log(data)
}

function blogdDetail(req, res) {
  const { id } = req.params
  // const id = req.params.id
  const data = {
    title: "hanya title untuk test",
    content: "isi content ini hanya untuk test yang di gunakan"
  }
  res.render('blog-detail', { data })
}

