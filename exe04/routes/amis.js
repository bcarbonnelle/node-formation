const fs = require('fs')
module.exports = (req,res) =>{
    fs.readFile(`${process.cwd()}/public/friends.json`,{encoding: 'utf-8'},(err,json)=>{
        if(err){
            res.writeHead(500,{'Content-Type' : 'text/html'})
            res.end('The server has problems. Please try later')
        }else{
            fs.readFile(`${process.cwd()}/templates/amis.html`,{encoding: 'utf-8'},(err,data)=>{
                if(err){
                    res.writeHead(500,{'Content-Type' : 'text/html'})
                    res.end('File Not Found')
                }
                res.end(genereateHTML(data,json))
            })
        }
    })   
}

const genereateHTML =(template,json)=>{
    return template.replace('{%friends%}',JSON.parse(json).map(item => item.Name).join('</li><li>')) // .join = ajoute entre 2 items
}

