const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)
const usersController = require(`${process.cwd()}/controllers/usersController`)

router.get('/', pagesController.home)
router.get('/about', pagesController.about)
router.get('/magasins/add', magasinsController.addMagasin)
router.get('/magasins/:id/edit', magasinsController.editMagasin)
router.post('/magasins/add',magasinsController.upload,magasinsController.resize, magasinsController.createMagasin)
router.get('/magasins/:slug', magasinsController.getMagasinBySlug)
router.get('/login', usersController.login)
router.post('/login', usersController.verify)
router.get('/register', usersController.registerForm)
router.post('/register', usersController.validateRegister,usersController.register)

router.post('/magasins/add/:id', magasinsController.upload,magasinsController.resize, magasinsController.updateMagasin)

module.exports = router