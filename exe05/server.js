const fs = require('fs')
let allData = ''

// fs.readFile(`${process.cwd()}/data/file1.txt`,(err,data)=>{
//     allData +=data
//     fs.readFile(`${process.cwd()}/data/file2.txt`,(err,data)=>{
//         allData+=data
//         console.log(allData)
//     })
// })

// let filePromise = new Promise((resolve,reject)=>{
//     if(err) reject(err)
//     resolve('truc')

// })

const readFile = (file)=>{
    return new Promise((resolve,reject) =>{
        fs.readFile(file,{encoding : 'utf-8'},(err,data)=>{            
            if (err) reject(err)
            resolve(data)
        })
    })
}

// readFile(`${process.cwd()}/data/file1.txt`)
//     .then(data => { 
//         console.log(data)
//         readFile(`${process.cwd()}/data/file2.txt`)
//             .then(data =>{
//                 console.log(data)
//             }).catch(err =>{
//                 console.log(err)
//             })
//     })

// readFile(`${process.cwd()}/data/file1.txt`)
//     .then(data => { 
//         console.log(data)
//         readFile(`${process.cwd()}/data/file2.txt`)
//             .then(data =>{
//                 console.log(data)
//             }).catch(err =>{
//                 console.log(err)
//             })
//     })

/////////////////////////////// version dépliée avec promesses gérée globalement
// let promise1 = readFile(`${process.cwd()}/data/file1.txt`)
// let promise2 = readFile(`${process.cwd()}/data/file2.txt`)
// let allPromises =[promise1,promise2]

// Promise.all(allPromises)
//     .then(results =>{
//         console.log(results) //retourne l'array des résultats
//     }).catch(err => {
//         console.log(err)
//     })

/////////////////////////////// version MINIFIEE avec promesses gérée globalement
Promise.all([readFile(`${process.cwd()}/data/file1.txt`),readFile(`${process.cwd()}/data/file2.txt`)])
    .then(results =>{
        console.log(results) //retourne l'array des résultats
    }).catch(err => {
        console.log(err)
    })