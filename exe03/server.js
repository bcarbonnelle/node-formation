const http = require ('http')
const fs = require('fs')

let body=''
let nbreProc=0
let nbreFini=0




const loadWeb=(url)=>{
    nbreProc+=1
    http.get(url,res=>{
        
        res.setEncoding('utf-8')
        
        res.on('data',donnees =>{
            body += donnees
        })

        res.on('end',()=>{
            
            nbreFini+=1
            console.log(nbreFini+'end')

            checkFinished()
            
        })
    })
}


const checkFinished=()=>{
    console.log('started : ' +nbreProc +'   Finished : '+nbreFini)
    if (nbreFini==nbreProc){
        console.log(body)
        fs.writeFile('index.hml',body,(err)=>{
            if(err)console.log(err)
            console.log('File generated')
        })
    }
}

loadWeb('http://www.carbonnelle.be')
loadWeb('http://www.skynet.be')
loadWeb('http://www.hotmail.be')