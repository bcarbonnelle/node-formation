const express = require('express')
const app = express()
const routes = require(`${process.cwd()}/routes`)
const hbs = require('express-hbs')

//view engine setup
app.engine('hbs',hbs.express4({
    partialsDir : [`${__dirname}/views/partials`],
    defaultLayout : `${__dirname}/views/layouts/main.hbs`
}))
app.set('view engine','hbs')
app.set('views',`${__dirname}/views`)

//setup du dossier statique pour les dossiers statiques
app.use(express.static(`${__dirname}/public`))

app.use('/',routes) // si l'url commence par '/' utilise mon fichier routes


module.exports = app