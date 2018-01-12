

const http = require('http')

const routes = [
    { url : '/', controller : 'home'},
    { url : '/about', controller : 'about'},
    { url : '/amis', controller : 'amis'}
]

const router = (req,res) =>{
    let indexRoute = routes.findIndex(item=>item.url === req.url)
    if(indexRoute!== -1){
        require(`./routes/${routes[indexRoute].controller}`)(req,res)
    } else {
        require('./routes/error')(res,res)
    }
}
http.createServer(router).listen(8601,()=>{
    console.log('server running and listening port 8601')
})
/* http.createServer((req,res)=>{
    console.log(req.url)
    console.log('We have received a request')
    if(req.url=='/about'){
        fs.readFile(`./templates/about.html`,(err,data)=>{
            res.end(data)
        })
    }
    else{
        fs.readFile(`./templates/index.html`,(err,data)=>{
            res.end(data)
        })
    }

    
}).listen(8601,()=>{
    console.log('server running and listening port 8601')
}) */
