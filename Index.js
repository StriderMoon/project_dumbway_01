const { log } = require('console')
const express = require('express')
const path = require('path')
const app = express()
const port = 5000

const config =  require('./src/config/config.json')
const { Sequelize, QueryTypes } = require("sequelize")
const sequelize = new Sequelize(config.development)

// setup to call hbs
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

// set static file server
app.use(express.static('src/assets'))

// parsing data from client
app.use(express.urlencoded({ extended: false }))

// routing
app.get('/', home)
app.get('/home_bootstrap', bootstrap)
app.get('/blogs', blogs)
app.get('/blog-detail/:id', blogdDetail)
app.get('/testimonial', testimonial)
app.get('/addblog', formblog)
app.post('/addblog', addblog)
app.get('/my-project', myProject)
app.get('/my-project-booststrap', myProjectBooststrap)
app.get('/contact_me', contactMe)


// local server
app.listen(port, () => {
  console.log("testing")
}) 

function home(req, res) {
  res.render('index')
}

function bootstrap(req, res) {
  res.render('home_bootstrap')
}

async function blogs(req, res) {
  try {
    const query = `SELECT id, title, image, content, 'blogs.createdAt' FROM blogs`
    let obj = await sequelize.query(query, { type: QueryTypes.SELECT })
    
    const data = obj.map((res) => ({
      ...res,
      author: "Tio triananda",
    }))

    res.render('blogs', { data })
  } catch (error) {
    console.log(error);
  }
}

function testimonial(req, res) {
  res.render('testimonial')
}

function formblog(req, res) {
  res.render('blogs')
} 

async function myProject(req, res) {
  try {
    const query = `SELECT id, project_name, start_date, end_date, content, image, "createdAt" FROM public."my-projects";`
    let obj = await sequelize.query(query, { type: QueryTypes.SELECT })

    const data = obj.map((res) => ({
     ...res,
    //  project_name: "testing project",
    }))

    res.render('my-project', { data })
  } catch (error) {
    console.log(error);
  }
}

function myProjectBooststrap(req, res) {
  res.render('my-project-booststrap')
} 

function contactMe(req, res) {
  res.render('contact_me')
}

function addblog(req, res) {
  const data = req.body
  console.log(data)
}

function blogdDetail(req, res) {
  const { id } = req.params
  // const id = req.params.id
  const data = {
    id,
    title: "hanya title untuk test",
    content: "isi content ini hanya untuk test yang di gunakan"
  }
  res.render('blog-detail', { data })
}

