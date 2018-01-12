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

const [action,value] = [process.argv[2],process.argv[3]]
const possibleActions = ['add','remove']
const fileMger = require(`./baud/fileManager`)
const checkAction = (action) =>{
    return possibleActions.filter(item => item ===action).length >0
}
const checkValue =(value) => (value) ? true : false // => retourne false si null ou undefined 0 ou NAN

const init =() =>{
    
    if(!checkAction(action)){
        console.log(`Error = the possible actions are :
                                - add
                                - remove`)
    }
    else if (!checkValue(value)){
        console.log(`Error : You need to give value for execution!`)
    }
    else{
        fileMger.init(`liste.txt`,action,value)
    }
}
init()
////////////////////////////premier code pas bon :(
// let value = process.argv[3]
// switch (process.argv[2]){
//     case 'add':
//         addNameInList(overwriteFile)
   
//         break
//     case 'remove':
//         break
//     default :
//         console.log(process.argv[2] + ' is not a valid command') 
// }
// function addNameInList(cb){
//     fs.readFile(`${process.cwd()}/liste.txt`,{encoding:'utf8'}, function(err,data){
//         if(err) console.log(err)
//         console.log('old content : ' + data)
//         data += '\n' + value
//         cb(data)

//     })
// }


// function overwriteFile(newcontent){
//     console.log('new content : ' + newcontent)
//     fs.writeFile(`${process.cwd()}/liste.txt`, newcontent,(err)=>{
//         if(err) console.log(err)
//         console.log('file correctly updated')
//     })

// }