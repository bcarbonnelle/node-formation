// console.log(process.argv)
// const fs = require('fs')
// function readFile()
// fs.readFile(`${process.cwd()}/liste.txt`,{encoding:'utf8'}, function(err,data){
//     if(err) console.log(err)
//     console.log(data)
// })
// if(process.argv[2]='add'){
//     fr.writeFile(`${process.cwd()}/liste.txt`, )
// }
const fs = require('fs')
let content=''
let value = process.argv[3]
switch (process.argv[2]){
    case 'add':
        addNameInList(overwriteFile)
   
        break
    case 'remove':
        break
    default :
        console.log(process.argv[2] + ' is not a valid command') 
}
function addNameInList(cb){
    fs.readFile(`${process.cwd()}/liste.txt`,{encoding:'utf8'}, function(err,data){
        if(err) console.log(err)
        console.log('old content : ' + data)
        data += '\n' + value
        cb(data)

    })
}
function

function overwriteFile(newcontent){
    console.log('new content : ' + newcontent)
    fs.writeFile(`${process.cwd()}/liste.txt`, newcontent,(err)=>{
        if(err) console.log(err)
        console.log('file correctly updated')
    })

}