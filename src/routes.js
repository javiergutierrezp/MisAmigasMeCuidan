const express = require('express')
const router = express.Router()

const users = require('./controllers/users.js')
const posts = require('./controllers/posts.js')
const eventos = require('./controllers/eventos.js')

const auth = require('./middleware/auth')

//users
router.post('/login', users.login)
router.post('/logout', auth, users.logout)
router.post('/users', users.createUser)  // signup

//posts
router.get('/posts/:id', auth, posts.getPost)
router.get('/posts', auth, posts.getPosts)
router.post('/posts', auth, posts.createPost)
router.patch('/posts/:id', auth, posts.updatePost)
router.delete('/posts/:id', auth, posts.deletePost)

//eventos
router.get('/eventos/:id', auth, eventos.getEvento)
router.get('/eventos', auth, eventos.getEventos)
router.post('/eventos', auth, eventos.crearEvento)
router.patch('/eventos/:id', auth, eventos.updateEvento)
router.delete('/eventos/:id', auth, eventos.deleteEvento)



router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist, try /users, /posts or /eventos'
  })
})

module.exports = router