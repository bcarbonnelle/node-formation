const fs = require('fs')
let values=[]
module.exports ={
    init:(file,action,value)=>{
        fs.readFile(file,(err,data)=>{
            values = (data.toString().split(`\n`))
            if(action===`add`){
                add(value,file)
            } else remove(value,file)
        })
    }
}
const a=3

function i(){
    a=5
}
const add =(value,file) =>{
    values.push(value)
    save(file)
}
const remove =(value,file) =>{
    const i = values.indexOf(value)
    if(i<0) console.log(`value not found`)
    else{
        values.splice(i,1)
    save(file)
    }
}
const save = (file) =>{
    let tempStr = values.reduce((prev,current)=>{
        return `${prev}\n${current}`
    })
    fs.writeFile(file,tempStr,(err) =>{
        if(err) console.log(err)
        console.log(`File Saved`)
    })
}