const express = require(`express`)
const path = require(`path`)
const app = express ()
const port = 5000

// setup to call hbs
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/view'))

// bila ingin gunakan yang html harus ganti ke hbs
app.get('/', (home))
// app.get('/nama_file', (data))

// file static file server
app.use(express.static('src/assets'))


app.listen(port, () => {
  console.log("server running on port 5000");
})

function home(req, res) {
  res.render('index')
}