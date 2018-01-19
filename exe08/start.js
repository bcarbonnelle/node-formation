const [major,minor]=process.versions.node.split('.').map(parseFloat)
if(major <7 || major === 7 && minor <= 5){
    console.log('The node version is too low for modern node programming')
    throw('The node version is too low for modern node programming')
}

//Start your app if everything is allright and initialized

const app = require('./app')
app.set('port', process.env.PORT || 8000)
const server = app.listen(app.get('port'),()=>{
    console.log(`Express is running on port ${server.address().port}`)
})